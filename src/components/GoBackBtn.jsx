import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const GoBackBtn = () => {
  const {
    single_product: { category },
  } = useGlobalContext();
  const history = useHistory();
  const goBack = () => history.push(`/${category}`);

  return (
    <button className='go-back-btn' onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBackBtn;
