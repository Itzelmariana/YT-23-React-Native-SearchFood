import { View, Text, StyleSheet, Image } from 'react-native';

export default function CategoryItems() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../images/burger.png')} style={styles.image} />
      </View>
      <Text>Burger</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.1,
    borderRadius: 40,
  },
  image: {
    width: 35,
    height: 35,
  },
});
