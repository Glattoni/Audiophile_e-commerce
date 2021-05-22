import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductProposition = ({ name, id, image }) => {
  const width = window.innerWidth;
  const { mobile, tablet, desktop } = image;
  return (
    <Wrapper>
      <img
        src={width >= 1280 ? desktop : width >= 768 ? tablet : mobile}
        alt=''
      />
      <h5>{name}</h5>
      <Link to={`/product/${id}`} className='btn-1'>
        see product
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 7.5rem;
  h5 {
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    margin-bottom: 2rem;
    border-radius: var(--radius);
  }
`;

export default ProductProposition;
