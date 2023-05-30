import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QuickMessageScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Snel Berichten!</Text>
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