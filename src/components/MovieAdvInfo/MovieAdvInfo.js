// import { useState, useEffect } from 'react';
// import propTypes from 'prop-types';
// import {
//   fetchMovieCredits,
//   fetchMovieReviews,
// } from '../../service/fetchMovies';
// import { Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';
// import Cast from '../Cast/Cast';
// import MovieReviews from '../Reviews/Reviews';

// const MovieAdvInfo = ({ advInfo }) => {
//   const [movieCredits, setMovieCredits] = useState(null);
//   const [movieReviews, setMovieReviews] = useState(null);
//   const { movieId } = useParams();
//   const { path } = useRouteMatch();

//   useEffect(() => {
//     fetchMovieCredits(movieId).then(res => {
//       console.log('res Credits :>> ', res);
//       setMovieCredits(res.cast);
//     });
//     fetchMovieReviews(movieId).then(res => {
//       console.log('resReviews :>> ', res);
//       setMovieReviews(res.results);
//     });
//   }, []);

//   return (
//     <div>
//       <NavLink to={`/movies/${movieId}/credits`}>Credits</NavLink>
//       <NavLink to={`/movies/${movieId}/reviews`}>Rewiews</NavLink>
//       <Route path={`${path}/credits`}>
//         <Cast credits={movieCredits} />
//       </Route>
//       <Route path={`${path}/reviews`}>
//         <MovieReviews reviews={movieReviews} />
//       </Route>
//     </div>
//   );
// };

// MovieAdvInfo.propTypes = {
//   advInfo: propTypes.object,
// };
// export default MovieAdvInfo;
