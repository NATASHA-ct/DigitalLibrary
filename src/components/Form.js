import Category from "./Category";

const Form = () => (
  <div className="formcontainer">
    <form className="form">
      <h2 className="form-hd">ADD A NEW BOOK</h2>
      <input className="input" type="text" placeholder="Book title" />
      <Category />
      <button className="addbtn">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
