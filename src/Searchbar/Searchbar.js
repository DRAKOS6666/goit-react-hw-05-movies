import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';

import style from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchText === '') {
      toast.error('Please enter search query!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <header className={style.Searchbar}>
      <form onSubmit={handleSubmit} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={searchText}
          onChange={handleChange}
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
export default Searchbar;
