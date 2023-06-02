import React from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';

export default function QuickMessageScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Snel Berichten!</Text>
      <Button onPress={()=>{Linking.openURL(`tel:${+310682371526}`);}} title='Bel Tim'></Button>
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