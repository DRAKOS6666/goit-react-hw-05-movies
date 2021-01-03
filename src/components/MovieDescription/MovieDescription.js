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
    <div>
      {movie && (
        <button type="button" onClick={handleButton}>
          Go Back
        </button>
      )}
      <h1>{movie.title}</h1>
      <img
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      />
    </div>
  );
};

MovieDescription.propTypes = {
  movie: propTypes.object,
};
export default MovieDescription;
