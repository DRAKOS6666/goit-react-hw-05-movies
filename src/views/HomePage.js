import { useState, useEffect, lazy } from 'react';
import { fetchMoviesTrends } from '../service/fetchMovies';

import LoaderWithTitle from '../components/Loader/LoaderWithTitle/LoaderWithTitle';
import style from './HomePage.module.css';

const MovieList = lazy(() =>
  import(
    '../components/MovieList/MovieList.js' /* webpackChunkName: "HomePageMovieList" */
  ),
);

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    getListOfMovies();
  }, []);

  const getListOfMovies = () => {
    setStatus(Status.PENDING);
    fetchMoviesTrends()
      .then(res => {
        setMovies(res.results);
        setStatus(Status.RESOLVED);
      })
      .catch(() => setStatus(Status.REJECTED));
  };

  return (
    <>
      <h1 className={style.title}>Today in Trend</h1>
      {status === 'pending' && <LoaderWithTitle />}
      {status === 'resolved' && <MovieList movies={movies} />}
      {status === 'rejected' && (
        <h2>An error occurred during the download. Try again please.</h2>
      )}
    </>
  );
};

export default HomePage;
