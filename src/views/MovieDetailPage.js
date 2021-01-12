import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';
import {
  fetchMovieID,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../service/fetchMovies';

import MovieDescription from '../components/MovieDescription/MovieDescription';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    fetchMovieCredits(movieId).then(res => {
      // console.log('res Credits :>> ', res);
      setMovieCredits(res.cast);
    });
    fetchMovieReviews(movieId).then(res => {
      // console.log('resReviews :>> ', res);
      setMovieReviews(res.results);
    });
  }, []);

  useEffect(() => {
    fetchMovieID(movieId).then(res => {
      // console.log('res :>> ', res);
      setMovie(res);
    });
  }, [movieId]);

  return (
    <>
      {movie && <MovieDescription movie={movie} />}
      <div>
        <NavLink to={`${url}/cast`}>Cast</NavLink>
        <NavLink to={`${url}/reviews`}>Rewiews</NavLink>
        <Route path={`${path}/cast`}>
          <Cast credits={movieCredits} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews reviews={movieReviews} />
        </Route>
      </div>
    </>
  );
};

// MovieDetailPage.propTypes = {
//     params: propTypes.
// }
export default MovieDetailPage;
