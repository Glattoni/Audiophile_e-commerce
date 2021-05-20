import React from 'react';
import { PageHero, Earphones, Categories, AboutUs } from '../components';

const EarphonesPage = () => {
  return (
    <main>
      <PageHero name={'earphones'} />
      <Earphones />
      <Categories />
      <AboutUs />
    </main>
  );
};

export default EarphonesPage;
