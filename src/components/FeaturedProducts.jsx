import React from 'react';
import Speaker_ZX9 from './Speaker_ZX9';
import Speaker_ZX7 from './Speaker_ZX7';
import Earphones_YX1 from './Earphones_YX1';

const FeaturedProducts = () => {
  return (
    <div className='container'>
      <Speaker_ZX9 />
      <Speaker_ZX7 />
      <Earphones_YX1 />
    </div>
  );
};

export default FeaturedProducts;
