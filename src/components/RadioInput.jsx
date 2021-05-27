import React from 'react';
import styled from 'styled-components';

const RadioInput = ({
  name,
  label,
  value,
  register,
  defaultChecked = false,
}) => {
  return (
    <Wrapper>
      <Label>
        <input
          className='radio'
          type='radio'
          value={value}
          defaultChecked={defaultChecked}
          {...register(label)}
        />
        <FakeRadio className='fake'></FakeRadio>
        {name}
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-weight: bold;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem 1.25rem 1.5rem;
  border: 1px solid var(--clr-grey-3);
  border-radius: var(--radius);
  cursor: pointer;
  .radio:checked + .fake::before {
    opacity: 1;
  }
  .radio {
    display: none;
  }
`;

const FakeRadio = styled.div`
  &.fake {
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--clr-grey-3);
    border-radius: 50%;
    color: var(--clr-primary-1);
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 0.625rem;
      height: 0.625rem;
      background-color: var(--clr-primary-1);
      border-radius: 50%;
      opacity: 0;
    }
  }
`;

export default RadioInput;
