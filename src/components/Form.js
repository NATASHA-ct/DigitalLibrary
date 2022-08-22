/*eslint-disable */
import { useDispatch } from "react-redux";
import { addBook } from "../redux/Book/book";

const Form = () => {
  const dispatch = useDispatch();
  const addBookHandler = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    dispatch(addBook(title, author));
  };
  return (
    <div className="formcontainer">
      <div className="Line"></div>
      <form className="form" onSubmit={addBookHandler}>
        <h2 className="form-hd">ADD A NEW BOOK</h2>
        <div className="all-inputs">
          <input
            onChange={() => {}}
            className="inputTittle"
            type="text"
            placeholder="Book title"
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
