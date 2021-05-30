import React from 'react';
import styled from 'styled-components';
import speaker_mobile from '/home/mobile/image-speaker-zx9.png';
import speaker_tablet from '/home/tablet/image-speaker-zx9.png';
import speaker_desktop from '/home/desktop/image-speaker-zx9.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/heleprs';

const Speaker_ZX9 = () => {
  const width = window.innerWidth;
  return (
    <Wrapper className='speaker-zx9'>
      <img
        src={`${
          width >= 1280
            ? speaker_desktop
            : width >= 768
            ? speaker_tablet
            : speaker_mobile
        }`}
        alt='speaker'
      />
      <Container>
        <h3>zx9 speaker</h3>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to='/product/6' className='btn-2' onClick={scrollToTop}>
          see product
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  padding: 3.5rem 2.25rem;
  background-color: var(--clr-primary-1);
  border-radius: var(--radius);
  color: var(--clr-white);
  text-align: center;
  overflow: hidden;
  img {
    margin-bottom: 2rem;
    position: relative;
    max-width: 10rem;
  }
  @media screen and (min-width: 768px) {
    img {
      max-width: 12.5rem;
      margin-bottom: 4rem;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 8.5rem;
    img {
      max-width: 24rem;
      position: absolute;
      bottom: -4.75rem;
      left: 8.75rem;
    }
  }
`;

const Container = styled.div`
  h3 {
    position: relative;
    text-transform: uppercase;
    margin: 0 auto;
    font-size: 2.25rem;
    font-weight: bold;
    letter-spacing: var(--ls-h6);
    margin-bottom: 1.5rem;
    max-width: 70%;
  }
  p {
    position: relative;
    opacity: 0.75;
    line-height: var(--lh-mili);
    margin-bottom: 1.5rem;
  }
  a {
    position: relative;
    background-color: var(--clr-black);
    color: var(--clr-white);
    &:hover {
      background-color: var(--clr-grey-2);
      outline-color: var(--clr-grey-2);
    }
  }
  @media screen and (min-width: 768px) {
    h3 {
      max-width: 45%;
      font-size: var(--fs-h1);
      letter-spacing: var(--ls-h1);
      line-height: var(--lh-h1);
    }
    p {
      margin: 0 auto;
      margin-bottom: 2.25rem;
      max-width: 45%;
    }
  }
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    max-width: 38%;
    text-align: left;
    h3 {
      max-width: 100%;
      font-size: var(--fs-h1);
      letter-spacing: var(--ls-h1);
      line-height: var(--lh-h1);
    }
    p {
      margin: 0 auto;
      margin-bottom: 2.25rem;
      max-width: 100%;
    }
  }
`;

export default Speaker_ZX9;
