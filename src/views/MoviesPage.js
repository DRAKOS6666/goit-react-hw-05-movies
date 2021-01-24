import { useEffect, useState, lazy } from 'react';
import propTypes from 'prop-types';
import Searchbar from '../Searchbar/Searchbar';
import { fetchMoviesQuery } from '../service/fetchMovies';
import { useHistory, useLocation } from 'react-router-dom';
import LoaderWithTitle from '../components/Loader/LoaderWithTitle/LoaderWithTitle';

import { toast } from 'react-toastify';
import style from './MoviesPage.module.css';

const MovieList = lazy(() =>
  import(
    '../components/MovieList/MovieList.js' /* webpackChunkName: "MoviesPageMovieList" */
  ),
);

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesPage = () => {
  const [findedMovies, setFindedMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryFinal = new URLSearchParams(location.search).get('query');
    const pageFromURL = new URLSearchParams(location.search).get('page');
    if (queryFinal) {
      setSearchQuery(queryFinal);
    }
    if (pageFromURL) {
      setPage(Number(pageFromURL));
    }
  }, []);

  useEffect(() => {
    if (findedMovies && query) {
      fetchMoviesQuery(query, page).then(res => {
        setFindedMovies(prevState => [...prevState, ...res.results]);
      });
    }
  }, [page]);

  useEffect(() => {
    if (query !== '') {
      history.push({
        ...location,
        search: `query=${query}&page=${page}`,
      });
    }
  }, [query, page]);

  const moreMovies = e => {
    setPage(prevState => (prevState += 1));
  };

  const setSearchQuery = text => {
    setPage(1);
    setQuery(text);
    setStatus(Status.PENDING);
    fetchMoviesQuery(text, page)
      .then(res => {
        if (res.results.length > 0) {
          console.log('res.results fetch query:>> ', res.results);
          setFindedMovies(res.results);
          setStatus(Status.RESOLVED);
        } else {
          setStatus(Status.IDLE);
          toast.error('Nothing Founded. Try another query query', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(() => {
        setStatus(Status.REJECTED);
      });
  };

  return (
    <>
      <Searchbar onSubmit={setSearchQuery} />
      {status === 'idle' && (
        <h1 className={style.title}>Please enter a search query.</h1>
      )}
      {status === 'pending' && <LoaderWithTitle />}
      {status === 'resolved' && (
        <>
          <MovieList movies={findedMovies} />
          <button type="button" onClick={moreMovies} className={style.moreBtn}>
            More
          </button>
        </>
      )}
      {status === 'rejected' && (
        <h1 className={style.errorTitle}>
          An error has occurred. Try again...
        </h1>
      )}
    </>
  );
};

MoviesPage.propTypes = {
  items: propTypes.array,
};
export default MoviesPage;
