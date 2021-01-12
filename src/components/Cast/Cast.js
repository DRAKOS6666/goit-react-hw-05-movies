import { useState } from 'react';
import propTypes from 'prop-types';
import noImage from '../../img/no-image-available.png';

import style from './Cast.module.css';

const Cast = ({ credits }) => {
  // const [ var , setVar ] = useState();
  // console.log('movieCredits :>> ', credits);
  console.log(style);
  return (
    <ul className={style.castList}>
      {credits.map(item => (
        <li className={style.listItem} key={item.id}>
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
          <p>Actor name: {item.name}</p>
          {item.character && <p>Character: {item.character}</p>}
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  movieCredits: propTypes.array,
};
export default Cast;
