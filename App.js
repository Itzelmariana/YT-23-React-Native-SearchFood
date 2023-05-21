import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header.js';
import Search from './src/component/Search.js';
import CategoryItems from './src/component/CategoryItems.js';

export default function App() {
  const [term, setTerm] = useState('Burger');
  const categories = [
    {
      name: 'Burger',
      imgUrl: require('./src/images/burger.png'),
    },
    {
      name: 'Pizza',
      imgUrl: require('./src/images/pizza.png'),
    },
    {
      name: 'Pasta',
      imgUrl: require('./src/images/pasta.png'),
    },
    {
      name: 'Steak',
      imgUrl: require('./src/images/steak.png'),
    },
    {
      name: 'Cake',
      imgUrl: require('./src/images/cake.png'),
    },
    {
      name: 'Drinks',
      imgUrl: require('./src/images/smoothies.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Search />

      <FlatList
        data={categories}
        renderItem={({ item }) => {
          return (
            <CategoryItems
              name={item.name}
              imgUrl={item.imgUrl}
              index={index}
              active={item.name === term}
              onPress={() => {}}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />

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
