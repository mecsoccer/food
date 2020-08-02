import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
  
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
              <View style={styles.productCard}>
                <Image
                  style={styles.image}
                  source={{ uri: 'http://res.cloudinary.com/yippee/image/upload/v1586519216/qmnhaatlsl5fdsx73stj.jpg' }}
                />
                <Text style={styles.productName}>{item.name + ', '}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  productCard: {
    marginRight:10,
    marginBottom:20,
    maxWidth: 150,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius:10,
    marginBottom: 5,
  },
  productName: {
    textAlign:'center',
    fontSize: 16,
  }
});

export default withNavigation(ResultList);
