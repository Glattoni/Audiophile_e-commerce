import React from 'react';
import styled from 'styled-components';
import { PageHero, Speakers, Categories, AboutUs } from '../components';

const SpeakersPage = () => {
  return (
    <Wrapper>
      <PageHero name={'speakers'} />
      <Container>
        <Speakers />
        <Categories />
        <AboutUs />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 10rem;
  @media screen and (min-width: 1280px) {
    padding-bottom: 10rem;
  }
`;

const Container = styled.main`
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

export default SpeakersPage;
