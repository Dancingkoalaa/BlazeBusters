import React from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button onPress={()=>{Linking.openURL(`tel:${+310682371526}`);}} title='Bel Tim'></Button>
    </View>
  );
}
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
