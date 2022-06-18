import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncCatCategories } from '../../redux/CatSlices';
import Categories from '../Categories/Categories';
import './SideBar.css';

const SideBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCatCategories());
  });

  return (
    <div>
      <div className='container'>
        <Categories />
      </div>
    </div>
  );
};

export default SideBar;
