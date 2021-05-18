import React, { useReducer, useContext, createContext } from 'react';
import reducer from '../reducer';
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../actions';

const GlobalContext = createContext();

const initialState = {
  cart: [],
  isSidebarOpen: false,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
