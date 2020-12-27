import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchMoviesTrends } from '../service/fetchMovies';

const HomePage = ({ moviesArr }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const result = getListOfMovies();
    // setMovies(() => {

    // })
  }, []);

  useEffect(() => {
    moviesArr(movies);
  }, [movies, moviesArr]);

  const getListOfMovies = () => {
    fetchMoviesTrends().then(res => {
      setMovies(res.results);
      moviesArr(movies);
    });
  };

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// Home.propTypes = {
//     movies: propTypes.arr
// }
export default HomePage;
