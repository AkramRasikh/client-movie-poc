import { useEffect, useState } from 'react';
import { getMoviesAPI } from './api-calls';
import './App.css';
import Home from './page/home';
import { Movie } from './types/movies';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const initialiseFirebase = async () => {
      try {
        const movieData = await getMoviesAPI();
        setMovies(movieData);
      } catch (error) {
        console.error('err: ', error);
      }
    };

    initialiseFirebase();
  }, []);

  return (
    <div className="App">
      <Home movies={movies} />
    </div>
  );
}

export default App;
