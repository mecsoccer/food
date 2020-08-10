import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, changeTerm, onSearchSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome
        name="search"
        size={24}
        color="black"
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="search"
        value={term}
        style={styles.input}
        onChangeText={changeTerm}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'gainsboro',
    height: 50,
    borderRadius: 4,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  input: {
    fontSize: 20,
    flex: 1,
    //height: 30,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 5,
  }
});

export default SearchBar;
