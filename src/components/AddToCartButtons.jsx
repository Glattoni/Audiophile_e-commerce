import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const AmountButton = (data) => {
  const { addToCart } = useGlobalContext();
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      const newAmount = oldAmount + 1;
      return newAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      if (oldAmount <= 1) {
        return setAmount(1);
      } else {
        const newAmount = oldAmount - 1;
        return newAmount;
      }
    });
  };

  return (
    <Wrapper>
      <Container>
        <Amount onClick={decrease}>-</Amount>
        <span>{amount}</span>
        <Amount onClick={increase}>+</Amount>
      </Container>
      <button className='btn-1' onClick={() => addToCart({ ...data, amount })}>
        add to cart
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  font-family: Manrope;
  font-weight: bold;
  display: flex;
  font-size: var(--fs-mili);
  background-color: var(--clr-base);
  span {
    text-align: center;
    width: 2.5rem;
    line-height: 3rem;
  }
`;
const Amount = styled.span`
  font-size: 1rem;
  display: block;
  color: var(--clr-grey-3);
  cursor: pointer;
  transition: var(--general-transition);
  ::selection {
    color: none;
    background-color: none;
  }
  :hover {
    color: var(--clr-primary-1);
  }
`;

export default AmountButton;
