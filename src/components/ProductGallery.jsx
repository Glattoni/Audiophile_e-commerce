import React from 'react';
import styled from 'styled-components';

const ProductGallery = ({ gallery = {} }) => {
  const { first = {}, second = {}, third = {} } = gallery;
  const width = window.innerWidth;
  return (
    <Wrapper>
      <SmallImages>
        <img
          src={
            width >= 1280
              ? first.desktop
              : width >= 768
              ? first.tablet
              : first.mobile
          }
          alt=''
        />
        <img
          src={
            width >= 1280
              ? second.desktop
              : width >= 768
              ? second.tablet
              : second.mobile
          }
          alt=''
        />
      </SmallImages>
      <BigImage>
        <img
          src={
            width >= 1280
              ? third.desktop
              : width >= 768
              ? third.tablet
              : third.mobile
          }
          alt=''
        />
      </BigImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    gap: 1.875rem;
  }
`;
const SmallImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }
  @media screen and (min-width: 1280px) {
    gap: 1.875rem;
  }
`;
const BigImage = styled.div`
  img {
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
  }
`;

export default ProductGallery;
