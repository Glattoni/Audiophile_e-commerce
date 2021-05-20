import React from 'react';
import HeadphonesCard from './HeadphonesCard';
import data from '../context/mockData/headphones';
import styled from 'styled-components';

const Headphones = () => {
  return (
    <Wrapper className='container'>
      {data.map((item) => {
        return <HeadphonesCard key={item.id} {...item} />;
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
