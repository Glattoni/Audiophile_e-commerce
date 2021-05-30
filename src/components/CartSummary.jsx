import React from 'react';
import styled from 'styled-components';
import { CartSummaryItem } from '../components';
import { formatPrice } from '../utils/heleprs';
import { useGlobalContext } from '../context/context';

const CartSummary = () => {
  const { cart, total_price, shipping, VAT, grand_total, toggleCheckoutModal } =
    useGlobalContext();
  return (
    <Summary>
      <h6 className='summary-title'>Summary</h6>
      <ul className='cart-items'>
        {cart.map((cartItem) => {
          return <CartSummaryItem key={cartItem.id} {...cartItem} />;
        })}
      </ul>
      <Totals>
        <p className='total-field'>
          total
          <span className='price'>{formatPrice(total_price)}</span>
        </p>
        <p className='total-field'>
          shipping
          <span className='price'>{formatPrice(shipping)}</span>
        </p>
        <p className='total-field'>
          vat (included)
          <span className='price'>{formatPrice(VAT)}</span>
        </p>
        <p className='total-field'>
          grand total
          <span className='price grand-total'>{formatPrice(grand_total)}</span>
        </p>
      </Totals>
      <button type='submit' className='btn-1'>
        continue & pay
      </button>
    </Summary>
  );
};

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  padding: 1.5rem;
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 2rem;
    width: 100%;
    max-width: 22rem;
  }
`;

const Totals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .total-field {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    color: var(--clr-grey-1);
    &:last-child {
      margin-top: 1.5rem;
    }
    .price {
      font-size: var(--fs-h6);
      font-weight: bold;
      color: var(--clr-black);
    }
    .grand-total {
      color: var(--clr-primary-1);
    }
  }
`;

export default CartSummary;
