import React from 'react';
import MoviesPage from '../../views/MoviesPage';
import { Link } from 'react-router-dom'


const Navigation = ( {params} ) => {
// const [ var , setVar ] = useState();
 
return <>
    <Link to="/Home">Home</Link>
    <Link to="/MoviesPage">Movies</Link>
    </>
};
 
// Navigation.propTypes = {
//     params: propTypes.
// }
export default Navigation;