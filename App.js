import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header.js';
import Search from './src/component/Search.js';
import CategoryItems from './src/component/CategoryItems.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <CategoryItems />
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
