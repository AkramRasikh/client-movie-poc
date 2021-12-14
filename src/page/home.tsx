import { Movie } from '../types/movies';

type HomeTypes = {
  movies: Movie[];
};

const Home = ({ movies }: HomeTypes) => (
  <div>
    <h1>Movies</h1>
    {movies ? (
      <div>
        {' '}
        {movies?.map((movieTitle, index) => (
          <p key={index}>{movieTitle.title}</p>
        ))}
      </div>
    ) : null}
  </div>
);

export default Home;
