import React from 'react';
import { PageHero, Speakers, Categories, AboutUs } from '../components';

const SpeakersPage = () => {
  return (
    <main>
      <PageHero name={'speakers'} />
      <Speakers />
      <Categories />
      <AboutUs />
    </main>
  );
};

export default SpeakersPage;
