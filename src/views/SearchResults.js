import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

const SearchResults = ({ movies, query }) => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  }, [history, location.pathname, query]);
  const { url } = useRouteMatch();
  console.log('movies :>> ', movies);
  // const [ var , setVar ] = useState();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

SearchResults.propTypes = {
  movies: propTypes.array,
};
export default SearchResults;
