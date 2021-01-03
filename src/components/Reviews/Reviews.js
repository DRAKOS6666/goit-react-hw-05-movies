import { useState } from 'react';
import propTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  // const [ var , setVar ] = useState();
  console.log('Reviews :>> ', reviews);
  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <div>Sorry Reviews not found</div>
  );
};

Reviews.propTypes = {
  rewiewId: propTypes.string,
};
export default Reviews;
