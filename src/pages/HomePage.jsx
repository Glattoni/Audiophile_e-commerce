import React from 'react';
import styled from 'styled-components';
import { Hero, Categories, FeaturedProducts, AboutUs } from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Container>
        <Categories />
        <FeaturedProducts />
        <AboutUs />
      </Container>
    </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  margin-bottom: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 6rem;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10.5rem;
    margin-bottom: 12.5rem;
  }
`;

export default HomePage;
