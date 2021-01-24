import { useState } from 'react';
import propTypes from 'prop-types';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import StarRatings from 'react-star-ratings';
import style from './MovieDescription.module.css';
import noPoster from '../../img/no-movie-poster.png';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDescription = ({ movie }) => {
  const [status, setStatus] = useState(Status.IDLE);

  return (
    <>
      <div className={style.wrapper}>
        <img
          className={style.image}
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : noPoster
          }
        />
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

          {movie.overview && (
            <>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </>
          )}
          {movie.genres.length > 0 && (
            <>
              <h3>Genres</h3>
              <p>
                {movie.genres.map(genre => (
                  <span key={genre.name} className={style.tags}>
                    {genre.name}
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

MovieDescription.propTypes = {
  movie: propTypes.object,
};
export default MovieDescription;
