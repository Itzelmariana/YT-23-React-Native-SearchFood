import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryItems from './CategoryItems';

export default function Categories({ setTerm, term }) {
  const categories = [
    {
      name: 'Burger',
      imgUrl: require('../images/burger.png'),
    },
    {
      name: 'Pizza',
      imgUrl: require('../images/pizza.png'),
    },
    {
      name: 'Pasta',
      imgUrl: require('../images/pasta.png'),
    },
    {
      name: 'Steak',
      imgUrl: require('../images/steak.png'),
    },
    {
      name: 'Cake',
      imgUrl: require('../images/cake.png'),
    },
    {
      name: 'Drinks',
      imgUrl: require('../images/smoothies.png'),
    },
  ];

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => {
        return (
          <CategoryItems
            name={item.name}
            imgUrl={item.imgUrl}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
    />
  );
}
