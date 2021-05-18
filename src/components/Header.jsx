import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const Header = () => {
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
                  <Link className='nav__link' to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <img src={cart} alt='cart' />
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
  .nav__link {
    font-size: var(--fs-micro);
    text-transform: uppercase;
    transition: var(--general-transition);
    &:hover {
      color: var(--clr-primary-1);
    }
  }
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .logo {
      margin-right: 26rem;
    }
  }
  @media screen and (min-width: 992px) {
    .logo {
      margin: 0;
    }
    nav {
      display: grid;
    }
  }
`;

export default Header;
