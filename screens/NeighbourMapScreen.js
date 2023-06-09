import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, View, Text } from 'react-native';

const NeighbourMap = ({ route }) => {
  let markerColor = 'Yellow'
  if (route.params !== undefined) {
    markerColor = route.params.markerColor;
    console.log(route)
  }

  const imagePaths = [
    { key: 'Yellow', name: 'Yellow', path: require('../assets/marker.png')},
    { key: 'Green', name: 'Green', path: require('../assets/markergreen.png')},
    { key: 'Pink', name: 'Pink', path: require('../assets/markerpink.png')},
    { key: 'Purple', name: 'Purple', path: require('../assets/markerpurple.png')},
    { key: 'Red', name: 'Red', path: require('../assets/markerred.png')},
    { key: 'Turquoise', name: 'Turquoise', path: require('../assets/markerturquoise.png')},
    // Add more images as needed
  ];

  //makes a start region for the map to load
  const [initialRegion, setInitialRegion] = useState({
    latitude: 51.917328,
    longitude: 4.484362, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState({
    latitude: 51.917328,
    longitude: 4.484362,
  });
  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
    })();
}, []);

  return (
    <View style={styles.container}>
      <MapView
      style={styles.map} 
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0200,
        longitudeDelta: 0.0200
      }}
      initialRegion={initialRegion}>
        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title='You' image={imagePaths.find((item) => item.key === markerColor).path} />
        <Marker coordinate={{latitude: 51.918092, longitude: 4.480246,}} title="BHV'er" pinColor={'navy'}/>
        <Marker coordinate={{latitude: 51.919092, longitude: 4.481246,}} title="BHV'er" image={require('../assets/markerbhv.png')}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default NeighbourMap;