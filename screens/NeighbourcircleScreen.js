import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NeighbourcircleScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Neighbours circle!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});