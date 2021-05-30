import React from 'react';
import styled from 'styled-components';
import logo from '/shared/desktop/logo.svg';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/heleprs';
import { Facebook, Twitter, Instagram } from '../components/logos';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer className='container'>
        <Nav>
          <img className='logo' src={logo} alt='logo' />
          <ul>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link className='nav-link' to={url} onClick={scrollToTop}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>
        <p className='about-us'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <FooterBottom>
          <p>Copyright {new Date().getFullYear()}. All rights reserved</p>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                aria-label='follow us on facebook'
              >
                <Facebook className='social-icon' />
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/?lang=en'
                target='_blank'
                aria-label='follow us on twitter '
              >
                <Twitter className='social-icon' />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                aria-label='follow us on twitter '
              >
                <Instagram className='social-icon' />
              </a>
            </li>
          </ul>
        </FooterBottom>
      </FooterContainer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-black);
  color: var(--clr-white);
  text-align: center;
  padding: 3.25rem 1.5rem;
  padding-bottom: 2.375rem;
  @media screen and (min-width: 768px) {
    padding: 2.5rem 3.75rem;
    padding-bottom: 2.875rem;
  }
`;

const FooterContainer = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -3.25rem;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 6.25rem;
    height: 0.25rem;
    background-color: var(--clr-primary-1);
  }
  .about-us {
    font-weight: 500;
    line-height: var(--lh-base);
    opacity: 0.5;
    margin-bottom: 3rem;
  }
  @media screen and (min-width: 768px) {
    &::after {
      top: -2.5rem;
      left: 0;
      transform: translateX(0);
    }
    .about-us {
      text-align: left;
    }
  }
  @media screen and (min-width: 1280px) {
    .about-us {
      max-width: 33.75rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  margin-bottom: 3rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .logo {
    max-width: 9rem;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    ul {
      flex-direction: row;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  p {
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  ul {
    display: flex;
    gap: 1rem;
    li {
      transition: var(--transiton-general);
      .social-icon:hover {
        fill: var(--clr-primary-1);
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    p {
      margin-bottom: 0;
    }
    ul {
      transform: translateY(-5rem);
    }
  }
`;

export default Footer;
