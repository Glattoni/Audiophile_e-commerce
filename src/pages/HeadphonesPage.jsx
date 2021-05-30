import React from 'react';
import styled from 'styled-components';
import { PageHero, Headphones, Categories, AboutUs } from '../components';

const HeadphonesPage = () => {
  return (
    <Wrapper>
      <PageHero name={'headphones'} />
      <Container>
        <Headphones />
        <Categories />
        <AboutUs />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-bottom: 7.5rem;
  @media screen and (min-width: 1280px) {
    padding-bottom: 10rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10.5rem;
  }
`;

export default HeadphonesPage;
