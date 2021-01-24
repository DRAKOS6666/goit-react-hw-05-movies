import propTypes from 'prop-types';
import { useState, useEffect, Suspense, lazy } from 'react';
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import {
  fetchMovieID,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../service/fetchMovies';

import LoaderWithTitle from '../components/Loader/LoaderWithTitle/LoaderWithTitle';
import style from './MovieDetailPage.module.css';

const MovieDescription = lazy(() =>
  import('../components/MovieDescription/MovieDescription.js'),
);
const Cast = lazy(() =>
  import('../components/Cast/Cast.js' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews/Reviews.js' /* webpackChunkName: "Reviews" */),
);

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const history = useHistory();
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovieCredits(movieId).then(res => {
      // console.log('res Credits :>> ', res);
      setMovieCredits(res.cast);
    });
    fetchMovieReviews(movieId).then(res => {
      setMovieReviews(res.results);
    });
  }, []);

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovieID(movieId)
      .then(res => {
        setMovie(res);
      })
      .then(setStatus(Status.RESOLVED));
  }, [movieId]);

  const handleButton = e => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button className={style.goBackBtn} type="button" onClick={handleButton}>
        Go Back
      </button>
      {status === 'pending' && <LoaderWithTitle />}

      {status === 'resolved' && (
        <>
          <Suspense fallback={<LoaderWithTitle />}>
            {movie && <MovieDescription movie={movie} />}
          </Suspense>
          {(movieReviews || movieCredits) && (
            <div>
              <h3>Addition Information</h3>
              <NavLink
                activeStyle={{ color: 'red' }}
                className={style.NavLink}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location.state.from },
                }}
              >
                Cast
              </NavLink>
              {movieReviews && movieReviews.length > 0 && (
                <NavLink
                  activeStyle={{ color: 'red' }}
                  className={style.NavLink}
                  to={{
                    pathname: `${url}/reviews`,
                    state: { from: location.state.from },
                  }}
                >
                  Rewiews
                </NavLink>
              )}
              <Suspense fallback={<LoaderWithTitle />}>
                <Route path={`${path}/cast`}>
                  <Cast credits={movieCredits} />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews reviews={movieReviews} />
                </Route>
              </Suspense>
            </div>
          )}
        </>
      )}
    </>
  );
};

// MovieDetailPage.propTypes = {
//     params: propTypes.
// }
export default MovieDetailPage;
