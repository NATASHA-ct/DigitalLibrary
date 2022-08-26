import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Book/book';

const BookList = (props) => {
  const {
    id, title, author, category,
  } = props;
  const randomPercentge = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  const randomChapter = Math.floor(Math.random() * (20 - 0 + 1) + 0);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li className="bookItem">
      <span className="bookarea">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>

        <span className="book-btns">
          <button className="commBtn bkbtn" type="button">
            Comments
          </button>
          <button className="rmvBtn bkbtn" type="button" onClick={clickHandler}>
            Remove
          </button>
          <button className="editBtn bkbtn" type="button">
            Edit
          </button>
        </span>
      </span>

      <span className="progress">
        <span className="circular-progress-container">
          <span
            role="progressbar"
            aria-label="progress Bar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ '--value': randomPercentge }}
          />
        </span>
        <span className="prog-details">
          <p className="percentage">
            {' '}
            {`${randomPercentge}%`}
          </p>
          <p className="completed">Completed</p>
        </span>

      </span>

      <span className="chapter-area">
        <h4 className="chapter">CURRENT CHAPTER</h4>
        <p className="chapter-number">{`Chapter ${randomChapter}`}</p>
        <button className="progressBtn" type="button">
          UPDATE PROGRESS
        </button>
      </span>
    </li>
  );
};

BookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookList;
