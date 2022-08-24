/*eslint-disable */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/Book/book";
import { v4 as rid } from "uuid";

const Form = () => {
  const dispatch = useDispatch();
    const [titleName, setTitle] = useState("");
    const [authorName, setAuthor] = useState("");
  const addBookHandler = (e) => {
    e.preventDefault();
    const book = {
      id: rid(),
      title: titleName,
      author: authorName,
      category: "not categorized yet",
    };
    dispatch(addBook(book));
    setTitle("");
    setAuthor("");
  };
  return (
    <div className="formcontainer">
      <div className="Line"></div>
      <form className="form" onSubmit={addBookHandler}>
        <h2 className="form-hd">ADD A NEW BOOK</h2>
        <div className="all-inputs">
          <input
            value={titleName}
            onInput={(e) => setTitle(e.target.value)}
            className="inputTittle"
            type="text"
            placeholder="Book title"
            required=""
          />

          <input
            value={authorName}
            onInput={(e) => setAuthor(e.target.value)}
            className="inputAuthor"
            type="text"
            placeholder="Book Author"
            required=""
          />

          <select
            onChange={() => {}}
            className="inputCategories"
            disabled
            selected
          >
            <option value="" className="catoption">
              Categories
            </option>
          </select>

          <button className="addbtn" type="submit">
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
