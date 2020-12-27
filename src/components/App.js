import React, { useState } from 'react';
// import Searchbar from './Searchbar/Searchbar';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Movies from '../views/MoviesPage';
// import Navigation from './Navigation/Navigation';
import HomePage from '../views/HomePage';
import MovieDetailPage from '../views/MovieDetailPage';

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      {/* <Navigation> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      {/* </Navigation> */}

      <Switch>
        <Route path="/" exact>
          <HomePage moviesArr={setMovies} />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
export default App;
