import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text } from 'react-native';

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imagePaths = [
    { key: 'Yellow', name: 'Yellow', path: require('../assets/marker.png')},
    { key: 'Green', name: 'Green', path: require('../assets/markergreen.png')},
    { key: 'Pink', name: 'Pink', path: require('../assets/markerpink.png')},
    { key: 'Purple', name: 'Purple', path: require('../assets/markerpurple.png')},
    { key: 'Red', name: 'Red', path: require('../assets/markerred.png')},
    { key: 'Turquoise', name: 'Turquoise', path: require('../assets/markerturquoise.png')},
    // Add more images as needed
  ];

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.markerItem} onPress={() => handleImageSelect(item.key)}>
        <Image
          source={item.path}
          style={ styles.markerIcon }
        />
        <Text style={styles.markerName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={imagePaths}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item.key}
      />

      {selectedImage && (
        <View>
          <Text>Selected Color: {selectedImage}</Text>
          <Image
            source={imagePaths.find((item) => item.key === selectedImage).path}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  markerItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  markerIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  markerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ImageSelector;
