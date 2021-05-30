import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProduct = (data) => {
  const width = window.innerWidth;
  const {
    img: { mobile, tablet, desktop },
    new_label,
    name,
    text,
    id,
  } = data;
  return (
    <Wrapper className={`${width >= 1280 && id % 2 === 0 ? 'reverse' : ''}`}>
      <div>
        <img
          src={width >= 1280 ? desktop : width >= 768 ? tablet : mobile}
          alt={name}
        />
      </div>
      <Content>
        <div>
          {new_label ? <span className='overline'>new product</span> : ''}
          <h4>{name}</h4>
          <p>{text}</p>
          <Link to={`/product/${id}`} className='btn-1'>
            see product
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }
  @media screen and (min-width: 768px) {
    gap: 3.25rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 7.85rem;
    flex-direction: row;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  h4 {
    margin-bottom: 1.5rem;
  }
  p {
    font-weight: 500;
    opacity: 0.5;
    line-height: var(--lh-micro);
    margin-bottom: 1.5rem;
    font-size: var(--fs-base);
  }
  div {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    gap: 3.25rem;
    h4 {
      font-size: var(--fs-h2);
      line-height: var(--lh-h2);
      max-width: 55%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
    p {
      max-width: 80%;
      margin: 0 auto;
      margin-bottom: 1.5rem;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    h4 {
      max-width: 72%;
      margin: 0;
      margin-bottom: 2rem;
    }
    p {
      margin: 0;
      margin-bottom: 2.5rem;
      max-width: 85%;
    }
    div {
      text-align: left;
    }
  }
`;

export default SingleProduct;
