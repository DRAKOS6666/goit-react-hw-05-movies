import propTypes from 'prop-types';

import style from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li className={style.listItem} key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  rewiewId: propTypes.string,
};
export default Reviews;
