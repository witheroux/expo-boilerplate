import { StyleSheet, Text, View } from 'react-native';

export const Popup = () => (
  <View style={styles.layout}>
    <Text>Popup</Text>
  </View>
);

export const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
