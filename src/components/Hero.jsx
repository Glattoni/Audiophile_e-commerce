import React from 'react';
import styled from 'styled-components';
import mobileImage from '../assets/mobile/hero.jpg';
import tabletImage from '../assets/tablet/hero.jpg';
import desktopImage from '../assets/desktop/hero.jpg';

const Hero = () => {
  const width = window.innerWidth;
  return (
    <HeroSection
      style={
        width >= 1280
          ? { backgroundImage: `url(${desktopImage})` }
          : width >= 768
          ? { backgroundImage: `url(${tabletImage})` }
          : { backgroundImage: `url(${mobileImage})` }
      }
    >
      <HeroContainer className='container'>
        <span>new product</span>
        <h1>XX99 Mark II Headphone</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <a className='btn-1'>see product</a>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  background-repeat: no-repeat;
  background-position: 0 100% !important;
  background-size: 100% 100%;
  border-top: 1px solid var(--clr-border);
  margin-bottom: 2.5rem;
  @media screen and (min-width: 768px) {
    background-position: center !important;
    background-size: cover;
  }
  @media screen and (min-width: 1280px) {
    background-position: 0 100% !important;
  }
`;
const HeroContainer = styled.div`
  text-align: center;
  color: var(--clr-white);
  span {
    display: inline-block;
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: var(--ls-mili);
    font-size: var(--fs-micro);
    line-height: var(--lh-mili);
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-weight: 500;
    opacity: 0.75;
    font-size: var(--fs-base);
    line-height: var(--lh-micro);
    margin-bottom: 1.75rem;
  }
  @media screen and (min-width: 768px) {
    span {
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: var(--fs-h1);
      line-height: var(--lh-h1);
      margin-bottom: 1.5rem;
    }
    p {
      max-width: 40%;
      margin: 0 auto;
      margin-bottom: 2.5rem;
    }
  }
  @media screen and (min-width: 1280px) {
    text-align: left;
    h1 {
      max-width: 35%;
    }
    p {
      margin: 0;
      margin-bottom: 2rem;
      max-width: 31%;
    }
  }
`;

export default Hero;
