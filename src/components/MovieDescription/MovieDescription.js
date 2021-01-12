import { useState } from 'react';
import propTypes from 'prop-types';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import StarRatings from 'react-star-ratings';
import style from './MovieDescription.module.css';
import MovieDetailPage from '../../views/MovieDetailPage';

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
      <button className={style.goBackBtn} type="button" onClick={handleButton}>
        Go Back
      </button>
      <div className={style.wrapper}>
        {movie.poster_path && (
          <img
            className={style.image}
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          />
        )}
        <div>
          <h1 className={style.title}>{movie.title}</h1>
          <p className={style.ratingText}>
            Release date:{' '}
            <span className={style.date}>{movie.release_date}</span>
          </p>
          <p className={style.ratingText}>Rating:</p>
          <StarRatings
            rating={movie.vote_average / 2}
            numberOfStars={5}
            name="rating"
            starRatedColor="yellow"
          />

          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres.map(genre => (
              <span className={style.tags}>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

MovieDescription.propTypes = {
  movie: propTypes.object,
};
export default MovieDescription;
