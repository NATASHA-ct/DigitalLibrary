import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual);
  const checkHandler = () => {
    dispatch(checkStatus());
    const h2 = document.querySelector('.catHeader');
    h2.innerHTML = categories;
  };
  return (
    <div>
      <h2 className="catHeader"> </h2>
      <button className="statusBtn" type="button" onClick={checkHandler}>
        Check status
      </button>
    </div>
  );
};

export default Category;
