import React, { createContext, useReducer } from 'react';

const BlogContext = createContext({});

const { Provider } = BlogContext;

const BlogProvider = ({ children }) => {
  return (
    <Provider value="yo man">
      {children}
    </Provider>
  )
}

export { BlogContext, BlogProvider };
