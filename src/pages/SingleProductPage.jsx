import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { GoBackBtn } from '../components';
import {
  ProductDetails,
  ProductGallery,
  ProductsPropositions,
  ProductDescription,
  Categories,
  AboutUs,
} from '../components';
import styled from 'styled-components';

const SingleProductPage = () => {
  let { id } = useParams();
  const { single_product, getSingleProduct } = useGlobalContext();

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  return (
    <Main>
      <div className='container'>
        <GoBackBtn />
      </div>
      <Container className='container'>
        <ProductDetails {...single_product} />
        <ProductDescription {...single_product} />
        <ProductGallery {...single_product} />
        <ProductsPropositions {...single_product} />
        <Categories />
        <AboutUs />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  padding-top: 1rem;
  @media screen and (min-width: 768px) {
    padding-top: 2rem;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  padding-top: 1.5rem;
  padding-bottom: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 7.5rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10rem;
    padding-top: 3.5rem;
    padding-bottom: 10rem;
  }
`;

export default SingleProductPage;
