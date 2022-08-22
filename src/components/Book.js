import React from 'react';
import { shallowEqual, useSelector } from "react-redux";
import BookList from './Booklist';
import Form from './Form';

const Book = () => {
  const newBook = useSelector((state) => state.books, shallowEqual);

  return (
    <ul className="allBooks">
      {newBook.map((data) => (
        <BookList
          key={data.id}
          id={data.id}
          title={data.title}
          author={data.author}
        />
      ))}
      <Form />
    </ul>
  );
};

export default Book;
