import React from 'react';
import styled from 'styled-components';
import ProductProposition from './ProductProposition';

const ProductsPropositions = ({ others = [] }) => {
  return (
    <Wrapper>
      <h5>you may also like</h5>
      <Container>
        {others.map((item, index) => {
          return <ProductProposition key={index} {...item} />;
        })}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  text-align: center;
  gap: 2rem 2rem;
  @media screen and (min-width: 768px) {
    gap: 0.6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 2rem;
  }
`;

const Wrapper = styled.section`
  text-align: center;
  h5 {
    margin-bottom: 2.5rem;
  }
`;

export default ProductsPropositions;
