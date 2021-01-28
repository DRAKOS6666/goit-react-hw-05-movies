import PropTypes from 'prop-types';

import StarRatings from 'react-star-ratings';
import style from './MovieDescription.module.css';
import noPoster from '../../img/no-movie-poster.png';

const MovieDescription = ({ movie }) => {
  const { wrapper, image, title, ratingText, date } = style;
  return (
    <>
      <div className={wrapper}>
        <img
          className={image}
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : noPoster
          }
        />
        <div>
          <h1 className={title}>{movie.title}</h1>
          <p className={ratingText}>
            Release date: <span className={date}>{movie.release_date}</span>
          </p>
          <p className={ratingText}>Rating:</p>
          <StarRatings
            rating={movie.vote_average / 2}
            numberOfStars={5}
            name="rating"
            starRatedColor="yellow"
            starDimension="5vw"
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
  movie: PropTypes.object.isRequired,
};
export default MovieDescription;
