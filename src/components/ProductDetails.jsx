import React from 'react';

const ProductDetails = (data) => {
  const {
    image: { mobile, tablet, desktop },
    name,
    new_label,
    description,
    features,
    price,
  } = data;
  const width = window.innerWidth;
  return (
    <section>
      <div>
        <img
          src={width >= 1280 ? desktop : width >= 768 ? tablet : mobile}
          alt='image'
        />
      </div>
      <div>
        {new_label ? <span className='overline'>new product</span> : ''}
      </div>
    </section>
  );
};

export default ProductDetails;
