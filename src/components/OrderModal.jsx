import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/heleprs';

const OrderModal = () => {
  const {
    cart,
    grand_total,
    clearCart,
    isCheckoutModalOpen,
    toggleCheckoutModal,
  } = useGlobalContext();
  const { cartImage: image, slug: title, price, amount } = cart[0];
  return (
    <Wrapper className={`${isCheckoutModalOpen ? 'show' : 'hide'}`}>
      <div className='check-mark'></div>
      <h5 className='title'>
        thank you <br /> for your order
      </h5>
      <p className='message'>You will receive an email confirmation shortly.</p>
      <div>
        <OrderSummary>
          <Container>
            <OrderItem>
              <img src={image} alt='order image' />
              <div className='info'>
                <p className='info-title'>{title}</p>
                <span className='amount'>x{amount}</span>
                <p className='price'>{formatPrice(price)}</p>
              </div>
            </OrderItem>
            <hr />
            <div className='others-amount'>
              and{cart.length - 1} other item(s)
            </div>
          </Container>
          <GrandInfo>
            <p className='grand-title'>Grand total</p>
            <p className='grand-price'>{formatPrice(grand_total)}</p>
          </GrandInfo>
        </OrderSummary>
        <Link
          to='/'
          className='btn-1 back-home'
          onClick={() => {
            toggleCheckoutModal();
            clearCart();
          }}
        >
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: var(--clr-white);
  width: 90vw;
  max-width: 33.75rem;
  border-radius: var(--radius);
  box-shadow: var(--modal-background);
  .check-mark {
    position: relative;
    width: 4rem;
    height: 4rem;
    background-color: var(--clr-primary-1);
    border-radius: 50%;
    margin-bottom: 1.5rem;
    &:after {
      content: url(/check-mark.svg);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.6rem;
      height: 1.5rem;
    }
  }
  .title {
    margin-bottom: 1rem;
  }
  .message {
    opacity: 0.5;
    margin-bottom: 1.5rem;
  }
  div {
    .back-home {
      width: 100%;
      text-align: center;
    }
  }
`;

const OrderItem = styled.div`
  display: flex;
  position: relative;
  padding-left: 3.125rem;
  min-height: 3.125rem;
  padding-bottom: 0.75rem;
  img {
    position: absolute;
    left: 0;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: var(--radius);
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    width: 100%;
    font-weight: bold;
    & > * {
      flex: 1 0 50%;
    }
    &-title {
      color: var(--clr-black);
    }
    .amount {
      text-align: right;
    }
  }
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--clr-base);
  border-radius: var(--radius);
  color: var(--clr-grey-1);
  margin-bottom: 1.5rem;
  hr {
    opacity: 0.08;
  }
  .others-amount {
    padding-top: 0.25rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const GrandInfo = styled.div`
  padding: 1rem 1.5rem;
  background-color: var(--clr-black);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  .grand-title {
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .grand-price {
    font-weight: bold;
    color: var(--clr-white);
    font-size: var(--fs-h6);
  }
`;

const Container = styled.div`
  padding: 1.5rem;
`;

export default OrderModal;
