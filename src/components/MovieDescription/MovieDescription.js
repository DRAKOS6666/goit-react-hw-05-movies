import { useState } from 'react';
import propTypes from 'prop-types';

const MovieDescription = ({ movie }) => {
  //   const [var, setVar] = useState();

  return (
    <div>
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
