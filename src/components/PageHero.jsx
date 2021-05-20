import React from 'react';
import styled from 'styled-components';

const PageHero = ({ name }) => {
  return (
    <Wrapper>
      <h4>{name}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-black);
  text-align: center;
  padding: 2rem 0;
  font-size: var(--fs-h4);
  color: var(--clr-white);
  border-top: 1px solid var(--clr-border);
  margin-bottom: 4rem;
  @media screen and (min-width: 768px) {
    padding: 5rem 0;
    h4 {
      font-size: var(--fs-h2);
      line-height: var(--lh-h2);
      letter-spacing: var(--ls-h2);
    }
  }
`;

export default PageHero;
