/*eslint-disable */

const Form = () => (
  <div className="formcontainer">
    <div className="Line"></div>
    <form className="form">
      <h2 className="form-hd">ADD A NEW BOOK</h2>
      <div className="all-inputs">
        <input className="inputTittle" type="text" placeholder="Book title" />
        <select className="inputCategories" disabled selected>
          <option value="" className="catoption">Categories</option>
        </select>
        <button className="addbtn" type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  </div>
);

export default Form;
