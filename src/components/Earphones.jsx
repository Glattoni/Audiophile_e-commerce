import React from 'react';
import SingleProduct from './SingleProduct';
import data from '../context/mockData/earphones';
import styled from 'styled-components';

const Earphones = () => {
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
`;

export default Earphones;
