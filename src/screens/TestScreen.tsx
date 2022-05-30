import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});

export default TestScreen;
