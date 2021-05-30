import React from 'react';
import styled from 'styled-components';

const ProductDescription = ({ features = '', includes = [] }) => {
  const text = features.split('\n\n');
  return (
    <Wrapper>
      <div>
        <h5>features</h5>
        <p>{text[0]}</p>
        <p>{text[1]}</p>
      </div>
      <Container>
        <h5>in the box</h5>
        <DeliverySet>
          {includes.map(({ quantity, item }, index) => {
            return (
              <li key={index}>
                <span>{quantity}x</span>
                {item}
              </li>
            );
          })}
        </DeliverySet>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  h5 {
    margin-bottom: 1.5rem;
  }
  p {
    opacity: 0.5;
    font-weight: 500;
    line-height: var(--lh-micro);
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
  @media screen and (min-width: 768px) {
    h5 {
      font-size: var(--fs-h3);
      letter-spacing: var(--ls-h3);
    }
    gap: 10rem;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    div {
      max-width: 57%;
    }
  }
`;

const DeliverySet = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  li {
    color: var(--clr-grey-1);
    font-weight: 500;
    line-height: var(--lh-micro);
    span {
      color: var(--clr-primary-1);
      display: inline-block;
      margin-right: 1.5rem;
      font-weight: bold;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    gap: 11rem;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 0;
  }
`;

export default ProductDescription;
