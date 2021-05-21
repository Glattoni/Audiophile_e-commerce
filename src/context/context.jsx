import React, { useReducer, useContext, createContext } from 'react';
import { CLOSE_SIDEBAR, OPEN_SIDEBAR, GET_SINGLE_PRODUCT } from '../actions';
import { data } from './mockData/data';
import reducer from '../reducer';

const GlobalContext = createContext();

const initialState = {
  isSidebarOpen: false,
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
    const product = data.find((item) => item.id === id);
    dispatch({ type: GET_SINGLE_PRODUCT, payload: { product } });
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
