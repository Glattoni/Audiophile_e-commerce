import React from 'react';
import styled from 'styled-components';
import earphones from '../assets/mobile/earphones.jpg';
import earphones_tablet from '../assets/tablet/earphones.jpg';
import earphones_desktop from '../assets/desktop/earphones.jpg';

const Earphones_YX1 = () => {
  const width = window.innerWidth;
  return (
    <Wrapper>
      <ImageContainer>
        <img
          src={`${
            width >= 1280
              ? earphones_desktop
              : width >= 768
              ? earphones_tablet
              : earphones
          }`}
          alt='earphones'
        />
      </ImageContainer>
      <div className='content'>
        <h4>yx1 earphones</h4>
        <a className='btn-2'>see product</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  .content {
    background-color: var(--clr-base);
    padding: 2.5rem 1.5rem;
    border-radius: var(--radius);
    h4 {
      padding-bottom: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0.6rem;
    .content {
      padding: 6.25rem 2.5rem;
    }
  }
  @media screen and (min-width: 1280px) {
    gap: 1.875rem;
    .content {
      width: 50%;
    }
  }
`;
const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
`;

export default Earphones_YX1;
