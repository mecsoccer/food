import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useProductsResults from '../hooks/useProductsResults';
import ResultList from '../Components/ResultList';
import { store } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
  const { state, dispatch } = useContext(store);

  const { term, setTerm, searchResult, onSearchSubmit } = useProductsResults();

  return (
    <>
      <Text style={styles.mgl}>Search Screen {state[0]}</Text>
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
};

SearchScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} style={styles.plusIconStyle} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  resultsView: {
    marginLeft: 10,
    marginTop: 20,
  },
  mgl: {
    marginLeft: 10,
  },
  plusIconStyle: {
    marginRight: 15
  }
});

export default SearchScreen;
