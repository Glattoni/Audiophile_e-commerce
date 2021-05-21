import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import {
  ProductDetails,
  ProductFeatures,
  ProductGallery,
  ProductSet,
  ProductsPropositions,
} from '../components';
import styled from 'styled-components';

const SingleProductPage = () => {
  const { single_product: product, getSingleProduct } = useGlobalContext();
  const { image, category } = product;
  let { id } = useParams();
  id = parseInt(id);

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  const history = useHistory();
  const goBack = () => history.push(`/${category}`);

  return (
    <main>
      <button className='go-back-btn' onClick={goBack}>
        Go Back
      </button>
      <ProductDetails image={image ? image : {}} {...product} />
      <ProductFeatures />
      <ProductSet />
      <ProductGallery />
      <ProductsPropositions />
    </main>
  );
};

const Main = styled.main`
  color: var(--clr-black);
`;

export default SingleProductPage;
