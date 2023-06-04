import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const ProfileEditScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [skills, setSkills] = useState('');
  const [disability, setDisability] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null); // Store the image URI
  const [age, setAge] = useState('');
  const [pets, setPets] = useState('');
  const [householdMembers, setHouseholdMembers] = useState('');
  const [spokenLanguages, setSpokenLanguages] = useState('');
  const [nonResuscitation, setNonResuscitation] = useState(false);
  const [bio, setBio] = useState('');

  const saveProfile = async () => {
    const profileData = {
      fullName,
      skills,
      disability,
      profilePhoto,
      age,
      pets,
      householdMembers,
      spokenLanguages,
      nonResuscitation,
      bio
    };

    try {
      await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
      console.log('Profile saved:', profileData);
      navigation.goBack(); // Go back to the ProfileScreen after saving
    } catch (error) {
      console.log('Error saving profile:', error);
    }
  };

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!pickerResult.cancelled) {
      setProfilePhoto(pickerResult.uri);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text>Skills:</Text>
        <TextInput
          style={styles.input}
          value={skills}
          onChangeText={setSkills}
        />

        <Text>Disability:</Text>
        <TextInput
          style={styles.input}
          value={disability}
          onChangeText={setDisability}
        />

        <Text>Profile Photo/Avatar:</Text>
        <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
          {profilePhoto ? (
            <Image source={{ uri: profilePhoto }} style={styles.photo} />
          ) : (
            <Text style={styles.choosePhotoText}>Choose Photo</Text>
          )}
        </TouchableOpacity>

        <Text>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />

        <Text>Pets:</Text>
        <TextInput
          style={styles.input}
          value={pets}
          onChangeText={setPets}
        />

        <Text>Number of People in Household:</Text>
        <TextInput
          style={styles.input}
          value={householdMembers}
          onChangeText={setHouseholdMembers}
          keyboardType="numeric"
        />

        <Text>Spoken Languages:</Text>
        <TextInput
          style={styles.input}
          value={spokenLanguages}
          onChangeText={setSpokenLanguages}
        />

        <Text>Non-Resuscitation Declaration:</Text>
        <TextInput
          style={styles.input}
          value={nonResuscitation.toString()}
          onChangeText={text => setNonResuscitation(text === 'true')}
        />

        <Text>Biography:</Text>
        <TextInput
          style={styles.input}
          value={bio}
          onChangeText={setBio}
          multiline
        />

        <Button title="Save Profile" onPress={saveProfile} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  photoContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    marginBottom: 12,
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 4,
  },
  choosePhotoText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileEditScreen;


