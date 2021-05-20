import React from 'react';
import styled from 'styled-components';
import speaker from '../assets/mobile/speaker_zx7.jpg';
import speaker_tablet from '../assets/tablet/speaker_zx7.jpg';
import speaker_desktop from '../assets/desktop/speaker_zx7.jpg';

const Speaker_ZX7 = () => {
  const width = window.innerWidth;
  return (
    <Wrapper
      style={
        width >= 1280
          ? { backgroundImage: `url(${speaker_desktop})` }
          : width >= 768
          ? { backgroundImage: `url(${speaker_tablet})` }
          : { backgroundImage: `url(${speaker})` }
      }
    >
      <h4>zx7 speaker</h4>
      <a className='btn-2'>see product</a>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 6.5rem 1.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: var(--radius);
  h4 {
    margin-bottom: 2rem;
  }
  a {
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    padding: 6.5rem 3.875rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 6.5rem 6rem;
  }
`;

export default Speaker_ZX7;
