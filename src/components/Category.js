import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual);
  const checkHandler = () => {
    dispatch(checkStatus());
  };
  const Button = (
    <button className="statusBtn" type="button" onClick={checkHandler}>
      Check status
    </button>
  );

  return (
    <div>
      <h2 className="catHeader">{categories}</h2>
      {Button}
    </div>
  );
};

export default Category;
