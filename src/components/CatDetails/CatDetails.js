import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncCatImages, getImages } from '../../redux/CatSlices';
import './Catdetails.scss';

const CatDetails = () => {
  const images = useSelector(getImages);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log('images:', images);

  useEffect(() => {
    if (id) {
      dispatch(fetchAsyncCatImages(id));
    }
  }, [dispatch, id]);

  return (
    <div className='cat-images-container'>
      {images.map((image) => (
        <div className='cat-images-container'>
          <img className='cat-image' src={image.url} alt='cat'></img>
        </div>
      ))}
    </div>
  );
};

export default CatDetails;
