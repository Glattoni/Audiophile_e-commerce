import React from 'react';
import { Hero, Categories, FeaturedProducts, AboutUs } from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <AboutUs />
    </main>
  );
};

export default HomePage;
