import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import {
  GoBackBtn,
  TextInput,
  RadioInput,
  CartSummaryItem,
} from '../components';
import { useGlobalContext } from '../context/context';
import { yupResolver } from '@hookform/resolvers/yup';
import { formatPrice } from '../utils/heleprs';
// import parsePhoneNumberFromString from 'libphonenumber-js';
import * as yup from 'yup';

const errorMessage = 'this field is required';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'should not contain numbers')
    .required('this field is required'),
  email: yup.string().email('wrong format').required(errorMessage),
  phone_number: yup.string().required(errorMessage),
  address: yup.string().required(errorMessage),
  zip_code: yup.string().required(errorMessage),
  city: yup.string().required(errorMessage),
  country: yup.string().required(errorMessage),
  payment_number: yup.string().required(errorMessage),
  payment_pin: yup.string().required(errorMessage),
});

// const normalizePhoneNumber = (value) => {
//   const phoneNumber = parsePhoneNumberFromString(value);
//   if (!phoneNumber) {
//     return value;
//   }
//   return phoneNumber.formatInternational();
// };

const Checkout = () => {
  const { cart, total_price, shipping, VAT, grand_total } = useGlobalContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  const paymentMethod = watch('payment_method');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container className='container'>
        <GoBackBtn className='return-button' />
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
          <FormGroup className='payment-details'>
            <h6 className='group-title'>payment details</h6>
            <FormSubGroup>
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
            </FormSubGroup>
            <FormSubGroup>
              <TextInput
                label='payment_number'
                name={`${
                  paymentMethod === 'Cash on Delivery'
                    ? 'Cash on Delivery'
                    : 'e-Money'
                } number`}
                type='text'
                placeholder='238521993'
                errors={errors}
                register={register}
                required
              />
              <TextInput
                label='payment_pin'
                name={`${
                  paymentMethod === 'Cash on Delivery'
                    ? 'Cash on Delivery'
                    : 'e-Money'
                } PIN`}
                type='text'
                placeholder='6891'
                errors={errors}
                register={register}
                required
              />
            </FormSubGroup>
          </FormGroup>
        </UserInfo>
        <Summary>
          <h6 className='summary-title'>Summary</h6>
          <ul className='cart-items'>
            {cart.map((cartItem) => {
              return <CartSummaryItem key={cartItem.id} {...cartItem} />;
            })}
          </ul>
          <Totals>
            <p className='total-field'>
              total
              <span className='price'>{formatPrice(total_price)}</span>
            </p>
            <p className='total-field'>
              shipping
              <span className='price'>{formatPrice(shipping)}</span>
            </p>
            <p className='total-field'>
              vat (included)
              <span className='price'>{formatPrice(VAT)}</span>
            </p>
            <p className='total-field'>
              grand total
              <span className='price grand-total'>
                {formatPrice(grand_total)}
              </span>
            </p>
          </Totals>
          <button type='submit' className='btn-1'>
            continue & pay
          </button>
        </Summary>
      </Container>
    </form>
  );
};

const Container = styled.div`
  padding: 1rem 0rem 6.25rem 0rem;
  font-family: 'Manrope';
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  .group-title {
    font-size: var(--fs-mili);
    color: var(--clr-primary-1);
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  &.billing-details > * {
    flex: 1 1 100%;
  }
  &.shipping-details > * {
    flex: 1 1 100%;
  }
  @media screen and (min-width: 768px) {
    &.billing-details > * {
      flex: 0 1 19.35rem;
    }
    &.shipping-details > * {
      flex: 0 1 19.35rem;
    }
    &.shipping-details > div:first-child {
      flex-basis: 100%;
    }
  }
`;

const FormSubGroup = styled.div`
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
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  padding: 1.5rem;
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Totals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .total-field {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    color: var(--clr-grey-1);
    &:last-child {
      margin-top: 1.5rem;
    }
    .price {
      font-size: var(--fs-h6);
      font-weight: bold;
      color: var(--clr-black);
    }
    .grand-total {
      color: var(--clr-primary-1);
    }
  }
`;

export default Checkout;
