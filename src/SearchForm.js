import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => (
  <form className="mb-8 mt-10 px-1 sm:px-4 max-w-6xl m-auto">
    <input type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl sm:text-4xl border-gray-300 rounded-md" value={props.query} onChange={event => props.onInput(event.target.value)} placeholder={props.placeholder} />
  </form>
);

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchForm;
