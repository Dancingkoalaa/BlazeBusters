import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imagePaths = {
    image1: require('../assets/markerpink.png'),
    image2: require('../assets/markerred.png'),
    image3: require('../assets/marker.png'),
    // Add more image keys and paths as needed
  };

  const handleImageSelect = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleImageSelect('image1')}>
        <Image
          source={require('../assets/markerpink.png')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleImageSelect('image2')}>
        <Image
          source={require('../assets/markerred.png')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleImageSelect('image3')}>
        <Image
          source={require('../assets/marker.png')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>

      {selectedImage && (
        <View>
          <Text>Selected Image: {selectedImage}</Text>
          <Image
            source={imagePaths[selectedImage]}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </View>
  );
};

export default ImageSelector;