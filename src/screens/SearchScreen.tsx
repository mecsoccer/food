import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useProductsResults from '../hooks/useProductsResults';
import ResultList from '../Components/ResultList';

const SearchScreen = () => {
  const { term, setTerm, searchResult, onSearchSubmit } = useProductsResults();

  return (
    <>
      <Text style={styles.mgl}>Search Screen</Text>
      <SearchBar
        changeTerm={(newTerm: string) => setTerm(newTerm)}
        onSearchSubmit={onSearchSubmit}
        term={term}
      />
      <ScrollView style={styles.resultsView}>
        <ResultList results={searchResult.slice(0, 10)} title="cost effective" />
        <ResultList results={searchResult.slice(11, 21)} title="bit pricier" />
        <ResultList results={searchResult.slice(22, 25)} title="big spender" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  resultsView: {
    marginLeft: 10,
    marginTop: 20,
  },
  mgl: {
    marginLeft: 10,
  }
});

export default SearchScreen;
