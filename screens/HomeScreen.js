import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [joinedEvents, setJoinedEvents] = useState([]);
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToNeighbourCircle = () => {
    navigation.navigate('Neighbours circle');
  };

  const goToQuickMessage = () => {
    navigation.navigate('Snel Berichten');
  };

  const goToImagePicker = () => {
    navigation.navigate('Imagepicker');
  };

  const goToNotifications = () => {
    navigation.navigate('Notifications')
  }

  const goToEvents = () => {
    navigation.navigate('Events');
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.newsFeedContainer}>
          <Text style={styles.newsTitle}>Neighbourhood News Update</Text>
          <Text style={styles.newsText}>Breaking News: Increased Security Measures Implemented in the Neighbourhood</Text>
        </View>
        <View style={styles.notificationContainer}>
          <Text style={styles.newsTitle}>Incoming messages</Text>
          <Text style={styles.notificationText}>John has sent you a request</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToQuickMessage}>
          <Icon name="chatbubble-ellipses" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToImagePicker}>
          <Icon name="map" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToNeighbourCircle}>
          <Icon name="people" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToProfile}>
          <Icon name="person" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  newsFeedContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsText: {
    fontSize: 16,
  },
  notificationContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 16,
  },
  eventsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  eventsButton: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  eventsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f4511e',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f57b36',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default HomeScreen;
