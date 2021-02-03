import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

  const {
    searchbar,
    searchForm,
    searchFormButton,
    searchFormButtonLabel,
    searchFormInput,
  } = style;
  return (
    <header className={searchbar}>
      <form onSubmit={handleSubmit} className={searchForm}>
        <button type="submit" className={searchFormButton}>
          <span className={searchFormButtonLabel}>Search</span>
        </button>

        <input
          value={searchText}
          onChange={handleChange}
          className={searchFormInput}
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
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
