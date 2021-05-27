import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const GoBackBtn = () => {
  const history = useHistory();
  const goToPreviousPath = () => history.goBack();
  return <Button onClick={goToPreviousPath}>Go Back</Button>;
};

const Button = styled.button`
  opacity: 0.5;
  font-weight: 500;
  line-height: var(--lh-micro);
  text-align: left;
`;

export default GoBackBtn;
