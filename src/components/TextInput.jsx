import React from 'react';
import styled from 'styled-components';

const TextInput = ({ label, name, type, placeholder, register, errors }) => {
  return (
    <Wrapper>
      <Label htmlFor={label} className={`${errors[label] ? 'danger' : ''}`}>
        {name}
        <p className='error-message'>{errors[label]?.message}</p>
      </Label>
      <Input
        id={label}
        type={type}
        placeholder={placeholder}
        className={`${errors[label] ? 'border-danger' : ''}`}
        {...register(label)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: capitalize;
  .error-message {
    text-transform: initial;
    color: var(--clr-danger);
  }
  &.danger {
    color: var(--clr-danger);
  }
`;

const Input = styled.input`
  font-weight: bold;
  font-size: var(--fs-micro);
  padding: 1.125rem 1.5rem;
  border: 1px solid var(--clr-grey-3);
  border-radius: var(--radius);
  outline: none;
  &:focus {
    caret-color: var(--clr-primary-1);
    border-color: var(--clr-primary-1);
  }
  &.border-danger {
    border: 2px solid var(--clr-danger);
  }
`;

export default TextInput;
