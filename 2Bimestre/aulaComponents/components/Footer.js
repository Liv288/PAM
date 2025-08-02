import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View>
      <Text style={styles.final}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  final: {
    marginTop: 45,
    color: '#3c3c3c',
    textAlign: 'center',
  },
});
