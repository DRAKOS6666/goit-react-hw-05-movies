import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../service/fetchMovies.js';
import noImage from '../../img/no-image-available.png';

import style from './Cast.module.css';
import LoaderWithTitle from '../Loader/LoaderWithTitle/LoaderWithTitle';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const [status, setStatus] = useState(Status.PENDING);
  const { movieId } = useParams();

  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(async res => {
        await setMovieCredits(res.cast);
        setStatus(Status.RESOLVED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, []);

  const { castList, listItem } = style;

  return (
    <>
      {status === 'pending' && <LoaderWithTitle />}
      {status === 'resolved' && (
        <ul className={castList}>
          {movieCredits.map(item => (
            <li className={listItem} key={item.id}>
              <img
                alt={item.original_name}
                width="300px"
                height="400px"
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w400${item.profile_path}`
                    : noImage
                }
              />
              <p>
                Actor name: <span>{item.name}</span>
              </p>
              {item.character && (
                <p>
                  Character: <span>{item.character}</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
      {status === 'rejected' && !movieCredits && (
        <h2>An error occurred during the download. Try again please.</h2>
      )}
    </>
  );
};

export default Cast;
