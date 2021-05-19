import React from 'react';
import styled from 'styled-components';
import speaker from '../assets/mobile/speaker_zx9.svg';
import circles from '../assets/pattern-circles.svg';

const Speaker_ZX9 = () => {
  return (
    <Wrapper style={{}}>
      <img src={speaker} alt='speaker' />
      <h3>zx9 speaker</h3>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <a className='btn-2'>see product</a>
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
  img {
    margin-bottom: 2rem;
  }
  h3 {
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: bold;
    letter-spacing: var(--ls-h6);
    margin-bottom: 1.5rem;
  }
  p {
    opacity: 0.75;
    line-height: var(--lh-mili);
    margin-bottom: 1.5rem;
  }
  a {
    background-color: var(--clr-black);
    color: var(--clr-white);
    &:hover {
      background-color: var(--clr-grey-2);
      outline-color: var(--clr-grey-2);
    }
  }
`;

export default Speaker_ZX9;
