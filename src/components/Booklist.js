import React from 'react';
import PropTypes from 'prop-types';

const BookList = (props) => {
  const { title, author } = props;

  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
    </li>
  );
};

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookList;
