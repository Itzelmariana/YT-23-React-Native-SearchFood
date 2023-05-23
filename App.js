import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header.js';
import Search from './src/component/Search.js';

import Categories from './src/component/Categories.js';

export default function App() {
  const [term, setTerm] = useState('Burger');

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories setTerm={setTerm} term={term} />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 15,
  },
});
