const Form = () => (
  <div className="formcontainer">
    <form className="form">
      <h2 className="form-hd">ADD A NEW BOOK</h2>
      <input className="inputTittle" type="text" placeholder="Book title" />
      <input className="inputAuthor" type="text" placeholder="Book author" />
      <button className="addbtn" type="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
