import React, { useEffect } from 'react';
import styled from 'styled-components';
import cashLogo from '/Shape.png';
import { useForm } from 'react-hook-form';
import {
  GoBackBtn,
  TextInput,
  RadioInput,
  CartSummary,
  OrderModal,
} from '../components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGlobalContext } from '../context/context';

const errorMessage = 'this field is required';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'should not contain numbers')
    .required('this field is required'),
  email: yup.string().email('wrong format').required(errorMessage),
  phone_number: yup.string().required(errorMessage),
  address: yup.string().required(errorMessage),
  zip_code: yup
    .number()
    .typeError('you must specify a number')
    .required(errorMessage),
  city: yup.string().required(errorMessage),
  country: yup.string().required(errorMessage),
  payment_method: yup.string().required(),
  e_money_number: yup.string().when('payment_method', {
    is: (value) => value === 'e-Money',
    then: yup.string().required(errorMessage),
    otherwise: yup.string().notRequired(),
  }),
  e_money_pin: yup.string().when('payment_method', {
    is: (value) => value === 'e-Money',
    then: yup.string().required(errorMessage),
    otherwise: yup.string().notRequired(),
  }),
});

const Checkout = () => {
  const { toggleCheckoutModal } = useGlobalContext();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    trigger('payment_method');
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      toggleCheckoutModal();
    }
  };
  const paymentMethod = watch('payment_method');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className='container button-container'>
        <GoBackBtn />
      </div>
      <Container className='container'>
        <UserInfo>
          <h4>Checkout</h4>
          <FormGroup>
            <h6 className='group-title'>Billing details</h6>
            <FieldWrapper className='billing-details'>
              <TextInput
                label='name'
                name='Name'
                type='text'
                placeholder='Alexey Ward'
                register={register}
                errors={errors}
              />
              <TextInput
                label='email'
                name='Email Adress'
                type='email'
                placeholder='alexey@mail.com'
                register={register}
                errors={errors}
              />
              <TextInput
                label='phone_number'
                name='Phone Number'
                type='tel'
                placeholder='+1 202-555-0136'
                register={register}
                errors={errors}
              />
            </FieldWrapper>
          </FormGroup>
          <FormGroup>
            <h6 className='group-title'>Shipping details</h6>
            <FieldWrapper className='shipping-details'>
              <TextInput
                label='address'
                name='Your Adress'
                type='text'
                placeholder='1137 Williams Avenue'
                errors={errors}
                register={register}
                className='address-field'
              />
              <TextInput
                label='zip_code'
                name='ZIP Code'
                type='text'
                placeholder='10001'
                errors={errors}
                register={register}
              />
              <TextInput
                label='city'
                name='City'
                type='text'
                placeholder='New York'
                errors={errors}
                register={register}
              />
              <TextInput
                label='country'
                name='Country'
                type='text'
                placeholder='United States'
                errors={errors}
                register={register}
              />
            </FieldWrapper>
          </FormGroup>
          <FormGroup>
            <h6 className='group-title'>payment details</h6>
            <FieldWrapper className='payment-wrapper'>
              <FormSubGroup className='payment-details'>
                <p className='subgroup-title'>Payment method</p>
                <RadioWrapper>
                  <RadioInput
                    label='payment_method'
                    name='e-Money'
                    type='text'
                    value='e-Money'
                    register={register}
                    defaultChecked={true}
                  />
                  <RadioInput
                    label='payment_method'
                    name='Cash on Delivery'
                    type='text'
                    value='Cash on Delivery'
                    register={register}
                  />
                </RadioWrapper>
              </FormSubGroup>
              {paymentMethod === 'e-Money' && (
                <FormSubGroup className='payment-data'>
                  <TextInput
                    label='e_money_number'
                    name='e-Money number'
                    type='text'
                    placeholder='238521993'
                    errors={errors}
                    register={register}
                  />
                  <TextInput
                    label='e_money_pin'
                    name='e-Money PIN'
                    type='text'
                    placeholder='6891'
                    errors={errors}
                    register={register}
                  />
                </FormSubGroup>
              )}
              {paymentMethod === 'Cash on Delivery' && (
                <CashOnDelivery>
                  <img src={cashLogo} alt='cash on delivery logo' />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </CashOnDelivery>
              )}
            </FieldWrapper>
          </FormGroup>
        </UserInfo>
        <CartSummary />
        <OrderModal />
      </Container>
    </Form>
  );
};

const Form = styled.form`
  padding: 1rem 0 6rem 0;
  @media screen and (min-width: 768px) {
    padding: 3rem 0 7.25rem 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 5rem 0 8.8rem 0;
  }
  .button-container {
    margin-bottom: 1.5rem;
  }
`;

const CashOnDelivery = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px !important;
  gap: 2rem;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
  }
  p {
    opacity: 0.5;
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  font-family: 'Manrope';
  display: flex;
  gap: 2rem;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  .group-title {
    font-size: var(--fs-mili);
    color: var(--clr-primary-1);
  }
  @media screen and (min-width: 768px) {
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 1rem;
  & > * {
    flex: 1 1 100%;
  }
  @media screen and (min-width: 768px) {
    & > *:not(.payment-details):not(.payment-data) {
      flex: 0 1 19.3rem;
    }
    &.shipping-details > div:first-child {
      flex-basis: 100%;
    }
    &.payment-wrapper {
      flex-direction: column;
    }
  }
`;

const FormSubGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .subgroup-title {
    font-size: 0.75rem;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    &.payment-details {
      flex-direction: row;
    }
    &.payment-details > * {
      width: 19.6rem;
    }
    &.payment-data {
      flex-direction: row;
    }
    &.payment-data > * {
      flex: 0 1 19.6rem;
    }
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--clr-white);
  gap: 2rem;
  border-radius: var(--radius);
  padding: 1.5rem;
  max-width: 45.625rem;
  @media screen and (min-width: 768px) {
    padding: 1.875rem 1.75rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 3rem;
  }
`;

export default Checkout;
