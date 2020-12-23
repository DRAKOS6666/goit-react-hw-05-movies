import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'
import fetchMovies from '../service/fetchMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const result = getListOfMovies();
    // setMovies(() => {

    // })
  }, []);

  const getListOfMovies = () => {
    fetchMovies().then(res => {
      setMovies(res.results);
      console.log(res.results);
    });
  };

  return (
    <ul>
      {movies.map(movie => 
        <li>
          <Link to="/movies/:movieId">{console.log('movie', movie)}</Link>
        </li>
      )}
    </ul>
  );
};

// Home.propTypes = {
//     movies: propTypes.arr
// }
export default HomePage;
