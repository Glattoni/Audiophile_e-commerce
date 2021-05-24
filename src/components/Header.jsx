import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import Cart from './Cart';

const Header = () => {
  const { toggleCartModal, isCartModalOpen } = useGlobalContext();
  return (
    <Wrapper>
      <div className='container header__container'>
        <Burger />
        <img className='logo' src={logo} alt='logo' />
        <nav>
          <ul className='nav__list'>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link className='nav-link' to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <img
          className='cart-image'
          src={cart}
          alt='cart'
          onClick={toggleCartModal}
        />
        <Cart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: grid;
  place-items: center;
  background-color: var(--clr-black);
  color: var(--clr-white);
  height: 5.625rem;
  .logo {
    width: 9rem;
  }
  nav {
    display: none;
  }
  .nav__list {
    display: flex;
    gap: 34px;
  }
  .header__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cart-image {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    .logo {
      margin-right: 26rem;
    }
  }
  @media screen and (min-width: 1280px) {
    .logo {
      margin: 0;
    }
    nav {
      display: grid;
    }
  }
`;

export default Header;
