import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToNeighbourCircle = () => {
    navigation.navigate('Neighbours circle');
  };

  const goToNeighbourMap = () => {
    navigation.navigate('Buurtkaart');
  };

  const goToQuickMessage = () => {
    navigation.navigate('Snel Berichten');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={goToProfile} />
      <Button title="Go to Neighbour Circle" onPress={goToNeighbourCircle} />
      <Button title="Go to Neighbour Map" onPress={goToNeighbourMap} />
      <Button title="Go to Quick Message" onPress={goToQuickMessage} />
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

