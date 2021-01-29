import { lazy, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import LoaderWithTitle from '../Loader/LoaderWithTitle/LoaderWithTitle';

import style from './App.module.css';

const HomePage = lazy(() =>
  import('../../views/HomePage/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const Movies = lazy(() =>
  import(
    '../../views/MoviesPage/MoviesPage.js' /* webpackChunkName: "Movies" */
  ),
);
const MovieDetailPage = lazy(() =>
  import(
    '../../views/MovieDetailPage/MovieDetailPage.js' /* webpackChunkName: "MovieDetailPage" */
  ),
);

function App() {
  return (
    <>
      <nav className={style.navPanel}>
        <NavLink
          activeStyle={{ color: 'red' }}
          className={style.navLink}
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ color: 'red' }}
          className={style.navLink}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<LoaderWithTitle />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
export default App;
