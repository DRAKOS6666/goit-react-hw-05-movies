import React, { useState } from 'react';
// import Searchbar from './Searchbar/Searchbar';
import { Route, NavLink } from 'react-router-dom';
import Movies from '../views/MoviesPage';
// import Navigation from './Navigation/Navigation';
import HomePage from '../views/HomePage';

function App() {
  const [query, setQuery] = useState('');
  return (
    <>
      {/* <Navigation> */}
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      {/* </Navigation> */}

        <div>
          <Route path="/" component={HomePage} />
          <Route path="/movies" component={Movies} />
        </div>
    </>
  );
}
export default App;
