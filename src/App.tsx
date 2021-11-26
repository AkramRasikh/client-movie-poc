import { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "./firebase-methods";

function App() {
  const [movies, setMovies] = useState<string[]>([]);
  useEffect(() => {
    const initialiseFirebase = async () => {
      try {
        console.log("gettig here!");
        const result = await getMovies();
        console.log("results: ", result);
        setMovies(result);
      } catch (error) {
        console.error("err: ", error);
      }
    };

    initialiseFirebase();
  }, []);

  return (
    <div className="App">
      <h1>Movies</h1>
      {movies ? (
        <div>
          {" "}
          {movies.map((movieTitle, index) => (
            <p key={index}>{movieTitle}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
