import React, { createContext, useReducer, useContext, useState } from 'react';

// Initial state
const initialState = {
  user: null,
  theme: 'light',
};

// Reducer function to manage state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// Create context
const GlobalContext = createContext();

// GlobalProvider component
export const GlobalProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)  

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
