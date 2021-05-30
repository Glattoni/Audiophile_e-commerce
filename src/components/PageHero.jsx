import React from 'react';
import styled from 'styled-components';

const PageHero = ({ name }) => {
  return (
    <Wrapper>
      <div className='container'>
        <h4>{name}</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-black);
  text-align: center;
  font-size: var(--fs-h4);
  color: var(--clr-white);
  margin-bottom: 7.5rem;
  div {
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  @media screen and (min-width: 768px) {
    div {
      padding: 6rem 0;
      h4 {
        font-size: var(--fs-h2);
        line-height: var(--lh-h2);
        letter-spacing: var(--ls-h2);
      }
    }
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 10rem;
  }
`;

export default PageHero;
