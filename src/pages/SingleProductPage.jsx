import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import {
  ProductDetails,
  ProductGallery,
  ProductsPropositions,
  GoBackBtn,
  ProductDescription,
  Categories,
  AboutUs,
} from '../components';
import styled from 'styled-components';

const SingleProductPage = () => {
  let { id } = useParams();
  const {
    single_product,
    getSingleProduct,
    single_product_loading = loading,
    single_product_error = error,
  } = useGlobalContext();

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  return (
    <Main className='container'>
      <GoBackBtn className='go-back-btn' />
      <ProductDetails {...single_product} />
      <ProductDescription {...single_product} />
      <ProductGallery {...single_product} />
      <ProductsPropositions {...single_product} />
      <Categories />
      <AboutUs />
    </Main>
  );
};

const Main = styled.main`
  padding-top: 1rem;
  .go-back-btn {
    margin-bottom: 1rem;
  }
`;

export default SingleProductPage;
