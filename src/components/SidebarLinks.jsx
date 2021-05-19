import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../utils/constants';
import styled from 'styled-components';

const SidebarLinks = () => {
  return (
    <Wrapper>
      <ul>
        {categories.map((category) => {
          return (
            <CategoryCard className='card' key={category.id} {...category} />
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 5.625rem);
  padding: 2rem 1.5rem;
  background-color: var(--clr-white);
  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }

  @media screen and (min-width: 768px) {
    min-height: 0;
    padding-top: 3.5rem;
    padding-bottom: 4rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    ul {
      gap: 0.625rem;
    }
  }
`;

export default SidebarLinks;
