import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/heleprs';
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';
import CartAmountBtn from './CartAmountBtn';

const Cart = () => {
  const { isCartModalOpen, cart, total_price, clearCart } = useGlobalContext();

  return (
    <Wrapper className={`${isCartModalOpen ? 'show' : 'hide'}`}>
      <header className='cart-header'>
        <h6>cart ({cart.length})</h6>
        <button className='clear-cart' onClick={clearCart}>
          Remove all
        </button>
      </header>
      <CartList>
        {cart.map((cartItem) => {
          const { id, slug, cartImage, price, amount } = cartItem;
          return (
            <ListItem key={id}>
              <img src={cartImage} alt='cart item' />
              <div className='item-info'>
                <h6 className='slug'>{slug}</h6>
                <span className='price'>{formatPrice(price)}</span>
              </div>
              <CartAmountBtn value={amount} id={id} />
            </ListItem>
          );
        })}
      </CartList>
      <div className='total-price'>
        <span className='heading'>total</span>
        <span className='cart-price'>{formatPrice(total_price)}</span>
      </div>
      <Link to='/checkout' className='btn-1 cart-btn'>
        Checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  position: absolute;
  z-index: 999;
  right: 0;
  top: 6rem;
  background-color: var(--clr-white);
  padding: 2rem 1.75rem;
  width: 100%;
  max-width: 23.5rem;
  color: var(--clr-black);

  .cart-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .cart-btn {
    text-align: center;
    width: 100%;
  }
  .total-price {
    display: flex;
    justify-content: space-between;
  }
  .clear-cart {
    text-decoration: underline;
    opacity: 0.5;
    line-height: var(--lh-micro);
  }
  .total-price {
    margin-bottom: 1.5rem;
    .heading {
      text-transform: uppercase;
      opacity: 0.5;
    }
    .cart-price {
      font-size: var(--fs-h6);
      font-weight: bold;
    }
  }
`;

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: var(--radius);
  }
  .item-info {
    .slug {
      font-size: var(--fs-base);
      line-height: var(--lh-micro);
    }
    .price {
      font-size: var(--fs-micro);
      font-weight: bold;
      line-height: var(--lh-micro);
      opacity: 0.5;
    }
  }
`;

export default Cart;
