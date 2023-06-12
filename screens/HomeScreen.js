import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = () => {
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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.newsFeedContainer}>
          <TouchableOpacity style={styles.button} onPress={goToNotifications}>
            <Icon name="chatbubble-ellipses" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.newsTitle}>Neighbourhood News Update</Text>
          <Text style={styles.newsText}>Breaking News: Increased Security Measures Implemented in the Neighbourhood</Text>
        </View>
        <View style={styles.notificationContainer}>
          <Text style={styles.newsTitle}>Incoming messages</Text>
          <Text style={styles.notificationText}> John has sent you a request</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  newsFeedContainer: {
    backgroundColor: 'lightgray',
    padding: 10,

     
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsText: {
    fontSize: 16,
  },
  notificationContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: 'mediumturquoise',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default HomeScreen;
