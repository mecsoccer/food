import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import yippeeApi from '../apis/yippeeApi';

const ResulstShowScreen = ({ navigation }) => {
  const temp = navigation.getParam('id');

  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    getProductResult(temp)
  }, [])

  const getProductResult = (id: string) => {
    yippeeApi.get('/products/' + id)
      .then((data: object) => {
        setProduct(data.data.product);
      })
      .catch((err: object) => console.log(err));
  }

  if (!product) return null;

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: product.image_url }}
      />
      <Text style={styles.productName}>{product.name + ', '}</Text>
      <Text>{product.name}</Text>
    </View>
  )
}

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

export default ResulstShowScreen;
