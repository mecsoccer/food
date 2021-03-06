import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CreateResource = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View >
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)} />
      <Button title="add resource" onPress={() => ''} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 31,
    borderColor:'black',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  }
});

export default CreateResource;
