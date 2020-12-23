import { useState } from 'react';
import propTypes from 'prop-types';

const MoviesPage = ( {items} ) => {
const [ firsItem , setFirsItem ] = useState({});
 
return (<>
<button type="button" onClick={() => setFirsItem(1)}>Img</button>
{firsItem && <img src={firsItem.webformatURL} alt={firsItem.tags}/>}
</>);
};
 
MoviesPage.propTypes = {
    items: propTypes.array
}
export default MoviesPage;