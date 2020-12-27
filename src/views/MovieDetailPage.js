import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieID } from '../service/fetchMovies';
import MovieDescription from '../components/MovieDescription/MovieDescription';
import MovieAdvInfo from '../components/MovieAdvInfo/MovieAdvInfo';
import propTypes from 'prop-types';

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieID(movieId).then(res => {
      // console.log('res :>> ', res);
      setMovie(res);
    });
  }, [movieId]);

  return (
    <>
      {movie && <MovieDescription movie={movie} />}
      <MovieAdvInfo movie={movie} />
    </>
  );
};

// MovieDetailPage.propTypes = {
//     params: propTypes.
// }
export default MovieDetailPage;
