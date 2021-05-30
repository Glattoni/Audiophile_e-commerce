import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mobileImage from '/home/mobile/image-header.jpg';
import tabletImage from '/home/tablet/image-header.jpg';
import desktopImage from '/home/desktop/image-hero.jpg';

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
        <div>
          <span>new product</span>
          <h1>XX99 Mark II Headphone</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to='/product/4' className='btn-1'>
            see product
          </Link>
        </div>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 768px) {
    background-position: center !important;
    background-size: cover;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 1280px) {
    background-position: 0 100% !important;
    margin-bottom: 7.5rem;
  }
`;
const HeroContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  min-height: calc(100vh - 5rem);
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
      max-width: 55%;
    }
    p {
      margin: 0;
      margin-bottom: 2rem;
      max-width: 48%;
    }
  }
`;

export default Hero;
