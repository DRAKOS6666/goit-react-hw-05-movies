import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../service/fetchMovies.js';

import style from './Reviews.module.css';
import LoaderWithTitle from '../Loader/LoaderWithTitle/LoaderWithTitle';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const [status, setStatus] = useState(Status.PENDING);
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(async res => {
        await setMovieReviews(res.results);
        setStatus(Status.RESOLVED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, []);

  return (
    <>
      {status === 'pending' && <LoaderWithTitle />}
      {status === 'resolved' &&
        (movieReviews.length > 0 ? (
          <ul>
            {movieReviews.map(({ id, author, content }) => (
              <li className={style.listItem} key={id}>
                <h3 className={style.authorNick}>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Sorry, no reviews found.</h2>
        ))}
      {status === 'rejected' && !movieReviews && (
        <h2>An error occurred during the download. Try again please.</h2>
      )}
    </>
  );
};

export default Reviews;
