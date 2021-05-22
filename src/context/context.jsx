import React, { useReducer, useContext, createContext } from 'react';
import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';
import { data } from './mockData/data';
import reducer from '../reducer';

const GlobalContext = createContext();

const initialState = {
  isSidebarOpen: false,
  single_product_loading: false,
  single_product_error: true,
  single_product: {},
  cart: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
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

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        getSingleProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
