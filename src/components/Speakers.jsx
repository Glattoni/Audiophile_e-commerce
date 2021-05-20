import React from 'react';
import SingleProduct from './SingleProduct';
import data from '../context/mockData/speakers';
import styled from 'styled-components';

const Headphones = () => {
  return (
    <Wrapper className='container'>
      {data.map((item) => {
        return <SingleProduct key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  margin-bottom: 7.5rem;
`;

export default Headphones;
