import React from 'react';
import SideBar from '../SideBar/SideBar';
import CatPhotoContainer from '../CatPhotoContainer/CatPhotoContainer';
import './Container.scss';

const Container = () => {
  return (
    <div className='content'>
      <SideBar />
      <CatPhotoContainer />
    </div>
  );
};

export default Container;
