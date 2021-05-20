import React from 'react';
import { PageHero, Headphones, Categories, AboutUs } from '../components';

const HeadphonesPage = () => {
  return (
    <main>
      <PageHero name={'headphones'} />
      <Headphones />
      <Categories />
      <AboutUs />
    </main>
  );
};

export default HeadphonesPage;
