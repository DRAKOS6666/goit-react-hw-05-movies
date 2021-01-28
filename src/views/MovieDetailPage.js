import { useState, useEffect, Suspense, lazy } from 'react';
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchMovieID, fetchMovieReviews } from '../service/fetchMovies';

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
  const [status, setStatus] = useState(Status.IDLE);

  const history = useHistory();
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovieID(movieId)
      .then(async res => {
        setMovie(res);
        await setStatus(Status.RESOLVED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, [movieId]);

  const handleButton = () => {
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
          {movie && (
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

              <Suspense fallback={<LoaderWithTitle />}>
                <Route path={`${path}/cast`}>
                  <Cast />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews />
                </Route>
              </Suspense>
            </div>
          )}
        </>
      )}

      {status === 'rejected' && (
        <h2>An error occurred during the download. Try again please.</h2>
      )}
    </>
  );
};

export default MovieDetailPage;
