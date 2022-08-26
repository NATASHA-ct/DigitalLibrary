import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBook } from '../redux/Book/book';
import BookList from './Booklist';
import Form from './Form';

const Book = () => {
  const item = useSelector((state) => state.books);
  const tascha = useDispatch();
  useEffect(() => {
    tascha(loadBook());
  }, []);

  return (
    <ul className="allBooks">
      {item.item.map((data) => (
        <BookList
          key={data.id}
          id={data.id}
          title={data.title}
          author={data.author}
          category={data.category}
        />
      ))}
      <Form />
    </ul>
  );
};

export default Book;
