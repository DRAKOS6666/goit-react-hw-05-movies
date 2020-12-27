import { useState } from 'react';
import propTypes from 'prop-types';
import Searchbar from '../Searchbar/Searchbar';
import { fetchMoviesQuery } from '../service/fetchMovies';
import SearchResults from './SearchResults';

const MoviesPage = ({ items }) => {
  const [findedMovies, setFindedMovies] = useState([]);
  const [query, setQuery] = useState('');

  const setSearchQuery = text => {
    setQuery(text);
    fetchMoviesQuery(text).then(res => {
      setFindedMovies(res.results);
      // window.history.pushState({
      //   pathname:
      // })
    });
  };

  return (
    <>
      <Searchbar onSubmit={setSearchQuery} />
      {findedMovies && <SearchResults query={query} movies={findedMovies} />}
    </>
  );
};

MoviesPage.propTypes = {
  items: propTypes.array,
};
export default MoviesPage;
