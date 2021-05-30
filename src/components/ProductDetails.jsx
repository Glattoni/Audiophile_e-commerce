import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/heleprs';
import AddToCartButtons from './AddToCartButtons';

const ProductDetails = (data) => {
  const width = window.innerWidth;
  const {
    id,
    image: { mobile, tablet, desktop } = {},
    name,
    slug,
    new: new_label,
    description,
    price,
    cartImage,
  } = data;

  const cartInfo = { name, price, id, slug, cartImage };

  return (
    <Wrapper>
      <ImageContainer>
        <img
          src={width >= 1280 ? desktop : width >= 768 ? tablet : mobile}
          alt='image'
        />
      </ImageContainer>
      <Content>
        {new_label ? <span className='overline'>new product</span> : ''}
        <h4>{name}</h4>
        <p>{description}</p>
        <span className='product-price'>{formatPrice(price)}</span>
        <AddToCartButtons {...cartInfo} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 4.3rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 7.75rem;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  .overline {
    margin-bottom: 1.5rem;
  }
  h4 {
    margin-bottom: 1.5rem;
  }
  p {
    opacity: 0.5;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .product-price {
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: var(--fs-h6);
    line-height: var(--lh-micro);
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
    max-width: 49%;
    h4 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    max-width: 40%;
    h4 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      margin-bottom: 2rem;
      max-width: 65%;
    }
    p {
      margin-bottom: 2rem;
    }
  }
`;

export default ProductDetails;
