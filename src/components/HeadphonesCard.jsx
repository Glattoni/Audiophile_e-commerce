import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeadphonesCard = (data) => {
  const width = window.innerWidth;
  const {
    img: { mobile, tablet, desktop },
    new_label,
    name,
    text,
    url,
    id,
  } = data;
  return (
    <Wrapper className={`${id % 2 === 0 ? 'reverse' : ''}`}>
      <div>
        <img
          src={width >= 1280 ? desktop : width >= 768 ? tablet : mobile}
          alt={name}
        />
      </div>
      <Content>
        {new_label ? <span className='overline'>new product</span> : ''}
        <h4>{name}</h4>
        <p>{text}</p>
        <Link to={url} className='btn-1'>
          see product
        </Link>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }
  @media screen and (min-width: 768px) {
    gap: 3.25rem;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 7.85rem;
  }
`;
const Content = styled.div`
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
    padding-top: 5.75rem;
    width: 100%;
    text-align: left;
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
  }
`;

export default HeadphonesCard;
