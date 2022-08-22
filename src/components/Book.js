import React from 'react';
import PropTypes from 'prop-types';
import BookList from './Booklist';
import Form from './Form';

const Book = (props) => {
  const { item } = props;

  return (
    <ul className="allBooks">
      {item.map((data) => (
        <BookList key={data.id} title={data.title} author={data.author} />))}
      <Form />
    </ul>
  );
};

Book.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Book;
