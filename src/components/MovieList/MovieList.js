import { useState } from 'react';
import propTypes from 'prop-types';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import style from './MovieList.module.css';
import noPoster from '../../img/no-movie-poster.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  // const { url, path } = useRouteMatch();

  return (
    <ul className={style.ImageGallery}>
      {movies.map(movie => (
        <li className={style.GalleryItem} key={movie.id}>
          <Link
            className={style.Link}
            to={{ pathname: `movies/${movie.id}`, state: { from: location } }}
          >
            <img
              height="200px"
              className={style.GalleryItemImage}
              alt={movie.title}
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`
                  : noPoster
              }
            />

            <h4 className={style.movieTitle}>{movie.title}</h4>
          </Link>

          <div className={style.movieExtraInfo}>
            <span>
              <StarRatings
                rating={movie.vote_average}
                numberOfStars={1}
                name="rating"
                starRatedColor="yellow"
                starDimension="25px"
              />
              Rating: {movie.vote_average}
            </span>
            <span>Release Date: {movie.release_date}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: propTypes.array,
};
export default MovieList;
