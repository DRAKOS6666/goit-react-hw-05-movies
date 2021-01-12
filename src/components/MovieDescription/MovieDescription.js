import { useState } from 'react';
import propTypes from 'prop-types';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

const MovieDescription = ({ movie }) => {
  //   const [var, setVar] = useState();
  const history = useHistory();
  const location = useLocation();

  const handleButton = e => {
    console.log('location :>> ', location);
    console.log('history :>> ', history);
    history.push('/movies');
  };

  return (
    <>
      {/* {console.log('Obj movie :>> ', movie)} */}
      <button type="button" onClick={handleButton}>
        Go Back
      </button>
      <div>
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>Release date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
    </>
  );
};

MovieDescription.propTypes = {
  movie: propTypes.object,
};
export default MovieDescription;
