import React, { createContext, useReducer } from 'react';

// Initial state with an empty favorites array
const initialState = {
  favorites: []
};

// Reducer function to handle adding and removing favorites
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(dog => dog.id !== action.payload.id) };
    default:
      return state;
  }
};

// Create a context
export const FavoritesContext = createContext();

// Create a provider component
export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};