import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const checkHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button type="button" onClick={checkHandler}>
        Check status
      </button>
    </div>
  );
};

export default Category;
