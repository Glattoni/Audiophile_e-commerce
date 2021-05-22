import React from 'react';
import styled from 'styled-components';

const AmountButton = () => {
  return (
    <Wrapper>
      <Amount>-</Amount>
      <span>1</span>
      <Amount>+</Amount>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-family: Manrope;
  font-weight: bold;
  display: flex;
  font-size: var(--fs-mili);
  background-color: var(--clr-base);
  span {
    width: 2.5rem;
    line-height: 3rem;
  }
`;
const Amount = styled.span`
  display: block;
  opacity: 0.25;
  cursor: pointer;
`;

export default AmountButton;
