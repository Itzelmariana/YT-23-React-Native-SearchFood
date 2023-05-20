import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome name='search' size={25} />
      <TextInput style={styles.input} placeholder='Restaurant, food..' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.1,
    borderRadius: 40,
    padding: 15,
  },
  input: {
    marginLeft: 15,
    fontSize: 24,
  },
});
