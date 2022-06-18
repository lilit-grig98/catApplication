import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/CatSlices';
import './Categories.scss';
import { fetchAsyncCatImages } from '../../redux/CatSlices';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const clickHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(fetchAsyncCatImages(id));
  };

  return (
    <div>
      <ul className='categories-container'>
        {categories.map((category) => {
          return (
            <li
              data-id={category.id}
              key={category.id}
              className='category'
              onClick={clickHandler}
            >
              <Link className='link' to={`/category/${category.id}`}>
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
