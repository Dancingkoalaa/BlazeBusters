import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <TouchableOpacity style={styles.button} onPress={goToProfile}>
        <Icon name="person" size={20} color="white" />
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToNeighbourCircle}>
        <Icon name="people" size={20} color="white" />
        <Text style={styles.buttonText}>Go to Neighbour Circle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToNeighbourMap}>
        <Icon name="map" size={20} color="white" />
        <Text style={styles.buttonText}>Go to Neighbour Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToQuickMessage}>
        <Icon name="chatbubble-ellipses" size={20} color="white" />
        <Text style={styles.buttonText}>Go to Quick Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});


