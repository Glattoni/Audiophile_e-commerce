import React, { useReducer, useContext, createContext, useEffect } from 'react';
import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  TOGGLE_CART_MODAL,
  ADD_TO_CART,
  GET_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_VAT,
  COUNT_GRAND_TOTAL,
} from '../actions';
import { data } from './mockData/data';
import reducer from '../reducer';

const GlobalContext = createContext();

const checkLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const initialState = {
  isSidebarOpen: false,
  isCartModalOpen: false,
  single_product_loading: false,
  single_product_error: true,
  single_product: {},
  cart: checkLocalStorage(),
  total_amount: 0,
  total_price: 0,
  shipping: 5000,
  VAT: 0,
  grand_total: 0,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const toggleCartModal = () => {
    dispatch({ type: TOGGLE_CART_MODAL });
  };

  const getSingleProduct = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const product = data.find((item) => item.id === parseInt(id));
      if (product) {
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: { product } });
      }
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const addToCart = (data) => {
    const { id, name, amount, price, image, cartImage, slug } = data;
    dispatch({
      type: ADD_TO_CART,
      payload: { id, name, amount, price, image, cartImage, slug },
    });
  };

  const toggleAmount = (id, value) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, value },
    });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: GET_CART_TOTALS });
    dispatch({ type: COUNT_CART_VAT });
    dispatch({ type: COUNT_GRAND_TOTAL });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        getSingleProduct,
        addToCart,
        toggleAmount,
        toggleCartModal,
        clearCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
