import { useState } from 'react';
import propTypes from 'prop-types';
import noImage from '../../img/no-image-available.png';

const Cast = ({ credits }) => {
  // const [ var , setVar ] = useState();
  console.log('movieCredits :>> ', credits);

  return (
    <ul>
      {credits.map(item => (
        <li key={item.id}>
          <img
            alt={item.original_name}
            width="100px"
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
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
