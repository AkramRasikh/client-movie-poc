import { useEffect, useState } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase-service";

function App() {
  const [movies, setMovies] = useState<string[]>([]);
  useEffect(() => {
    const initialiseFirebase = async () => {
      try {
        const result = await getDocs(collection(db, "movies"));
        const movieList = result.docs.map((one) => one.data().title);
        setMovies(movieList);
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
