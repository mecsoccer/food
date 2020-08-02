import React, { useState, useEffect } from 'react';
import yippeeApi from '../apis/yippeeApi';

export default () => {
  const [term, setTerm] = useState('cola');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    onSearchSubmit();
  }, [])

  const onSearchSubmit = () => {
    yippeeApi.get('/products/search', { params: { value: term } })
      .then((res) => {
        setSearchResult(res.data.products);
      })
      .catch(({ response, message }) => {
        console.log(message, response);
      });
  };

  return { term, setTerm, searchResult, onSearchSubmit };
}