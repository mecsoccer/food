import React, { createContext, useReducer } from 'react';

const store = createContext({});

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_BLOG_POST':
        return [...state, `blog post #${state.length + 1}`];
      default:
        return state;
    }
  }, ['blog post #0']);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider };
