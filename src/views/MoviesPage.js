import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Searchbar from '../Searchbar/Searchbar';
import { fetchMoviesQuery } from '../service/fetchMovies';
import SearchResults from './SearchResults';
import { useHistory, useLocation } from 'react-router-dom';

const MoviesPage = ({ items }) => {
  const [findedMovies, setFindedMovies] = useState([]);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryFinal = new URLSearchParams(location.search).get('query');
    if (queryFinal) {
      setSearchQuery(queryFinal);
    }
  }, []);

  useEffect(() => {
    if (query !== '') {
      history.push({
        ...location,
        search: `query=${query}`,
      });
    }
  }, [query]);

  const setSearchQuery = text => {
    setQuery(text);
    fetchMoviesQuery(text).then(res => {
      setFindedMovies(res.results);
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
