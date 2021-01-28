import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import style from './MovieList.module.css';
import noPoster from '../../img/no-movie-poster.png';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const {
    imageGallery,
    galleryItem,
    link,
    galleryItemImage,
    movieTitle,
    movieExtraInfo,
  } = style;
  return (
    <ul className={imageGallery}>
      {movies.map(
        ({ id, title, backdrop_path, vote_average, release_date }) => (
          <li className={galleryItem} key={id}>
            <Link
              className={link}
              to={{ pathname: `movies/${id}`, state: { from: location } }}
            >
              <img
                height="200px"
                className={galleryItemImage}
                alt={title}
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w300${backdrop_path}`
                    : noPoster
                }
              />

              <h4 className={movieTitle}>{title}</h4>
            </Link>

            <div className={movieExtraInfo}>
              <span>
                <StarRatings
                  rating={vote_average}
                  numberOfStars={1}
                  name="rating"
                  starRatedColor="yellow"
                  starDimension="25px"
                />
                Rating: {vote_average}
              </span>
              <span>Release Date: {release_date}</span>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default MovieList;
