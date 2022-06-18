import React from 'react';
import { useDispatch } from 'react-redux';
import CatList from '../CatList/CatList';
import { useEffect } from 'react';
import { fetchAsyncCats } from '../../redux/CatSlices';

function CatPhotoContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncCats());
  }, [dispatch]);
  return (
    <div>
      <CatList />
    </div>
  );
}

export default CatPhotoContainer;
