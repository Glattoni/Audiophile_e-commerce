import React from 'react';
import styled from 'styled-components';
import speaker from '../assets/mobile/speaker_zx9.svg';
import speaker_desktop from '../assets/desktop/speaker_zx9.svg';

const Speaker_ZX9 = () => {
  const width = window.innerWidth;
  return (
    <Wrapper className='speaker-zx9'>
      <img src={`${width >= 1280 ? speaker_desktop : speaker}`} alt='speaker' />
      <Container>
        <h3>zx9 speaker</h3>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <a className='btn-2'>see product</a>
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
  }
  @media screen and (min-width: 768px) {
    img {
      margin-bottom: 4rem;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 8.5rem;
    img {
      position: absolute;
      bottom: -4rem;
      left: 7.5rem;
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
