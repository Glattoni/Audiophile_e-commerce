import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const CartAmountBtn = ({ value, id }) => {
  const { toggleAmount } = useGlobalContext();

  return (
    <AmountBtn>
      <div onClick={() => toggleAmount(id, 'dec')}>-</div>
      <div className='amount'>{value}</div>
      <div onClick={() => toggleAmount(id, 'inc')}>+</div>
    </AmountBtn>
  );
};

const AmountBtn = styled.button`
  background-color: var(--clr-base);
  display: flex;
  text-align: center;
  div {
    font-size: var(--fs-mili);
    opacity: 0.25;
    font-weight: bold;
    width: 2rem;
    line-height: 2rem;
  }
  .amount {
    opacity: 1;
  }
`;

export default CartAmountBtn;
