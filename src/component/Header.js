import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.text}>
      <Text style={styles.text1}>Grab your</Text>
      <Text style={styles.text2}>delicious meal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: '30%',
  },
  text1: {
    fontSize: 35,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 35,
  },
});
