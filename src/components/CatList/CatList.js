import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCats } from '../../redux/CatSlices';
import './CatList.scss';

const CatList = () => {
  const cats = useSelector(getAllCats);
  return (
    <div className='image-container'>
      {cats.map((cat, index) => {
        return (
          <div>
            <img className='cat-img' src={cat.url} alt='Pisik'></img>
          </div>
        );
      })}
    </div>
  );
};

export default CatList;
