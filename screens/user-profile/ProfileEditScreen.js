import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button, Image, TouchableOpacity, Switch, KeyboardAvoidingView, Alert } from 'react-native';
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
  const [bhv, setBHV] = useState(false);
  const [ehbo, setEHBO] = useState(false);
  const [bio, setBio] = useState('');

  useEffect(() => {
    loadProfileData(); // Load the profile data on component mount
  }, []);

  const loadProfileData = async () => {
    try {
      const profileData = await AsyncStorage.getItem('profileData');
      if (profileData) {
        const parsedProfileData = JSON.parse(profileData);
        setFullName(parsedProfileData.fullName);
        setSkills(parsedProfileData.skills);
        setDisability(parsedProfileData.disability);
        setProfilePhoto(parsedProfileData.profilePhoto);
        setAge(parsedProfileData.age);
        setPets(parsedProfileData.pets);
        setHouseholdMembers(parsedProfileData.householdMembers);
        setSpokenLanguages(parsedProfileData.spokenLanguages);
        setNonResuscitation(parsedProfileData.nonResuscitation);
        setBHV(parsedProfileData.bhv);
        setEHBO(parsedProfileData.ehbo);
        setBio(parsedProfileData.bio);
      }
    } catch (error) {
      console.log('Error loading profile data:', error);
    }
  };

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
      bhv,
      ehbo,
      bio
    };

    try {
        await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
        console.log('Profile saved:', profileData);
  
        // Display a popup message indicating successful profile update
        Alert.alert('Success', 'Your profile is updated', [
          {
            text: 'OK',
            onPress: () => {
              navigation.goBack(); // Go back to the ProfileScreen after saving
            },
          },
        ]);
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
          placeholder="Enter your full name"
        />

        <Text>Skills:</Text>
        <TextInput
          style={styles.input}
          value={skills}
          onChangeText={setSkills}
          placeholder="Enter your skills"
        />

        <Text>Disability:</Text>
        <TextInput
          style={styles.input}
          value={disability}
          onChangeText={setDisability}
          placeholder="Enter your disability"
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
          placeholder="Enter your age"
        />

        <Text>Pets:</Text>
        <TextInput
          style={styles.input}
          value={pets}
          onChangeText={setPets}
          placeholder="Enter your pets"
        />

        <Text>Number of People in Household:</Text>
        <TextInput
          style={styles.input}
          value={householdMembers}
          onChangeText={setHouseholdMembers}
          keyboardType="numeric"
          placeholder="Enter the number of household members"
        />

        <Text>Spoken Languages:</Text>
        <TextInput
          style={styles.input}
          value={spokenLanguages}
          onChangeText={setSpokenLanguages}
          placeholder="Enter your spoken languages"
        />

        <Text>Non-Resuscitation Declaration:</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={nonResuscitation}
            onValueChange={setNonResuscitation}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={nonResuscitation ? '#f5dd4b' : '#f4f3f4'}
          />
          <Text>{nonResuscitation ? 'Yes' : 'No'}</Text>
        </View>

        <Text>BHV or/and EHBO:</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, bhv ? styles.buttonSelected : null]}
            onPress={() => setBHV(!bhv)}
          >
            <Text style={styles.buttonText}>BHV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, ehbo ? styles.buttonSelected : null]}
            onPress={() => setEHBO(!ehbo)}
          >
            <Text style={styles.buttonText}>EHBO</Text>
          </TouchableOpacity>
        </View>

        <Text>Biography(optional):</Text>
        <TextInput
          style={styles.input}
          value={bio}
          onChangeText={setBio}
          multiline
          placeholder="Enter your biography"
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
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      color: '#333',
    },
    input: {
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      backgroundColor: '#fff',
      color: '#333',
    },
    photoContainer: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      marginBottom: 12,
      backgroundColor: '#f9f9f9',
    },
    photo: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 4,
    },
    choosePhotoText: {
      fontSize: 16,
      color: '#666',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    buttonsContainer: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    button: {
      flex: 1,
      backgroundColor: '#e4e4e4',
      borderRadius: 4,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonSelected: {
      backgroundColor: '#81b0ff',
    },
    buttonText: {
      color: 'black',
    },
    buttonTextSelected: {
      color: 'white',
    },
    bioInput: {
      height: 120,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      paddingTop: 8,
      backgroundColor: '#fff',
      color: '#333',
    },
  });
  
  export default ProfileEditScreen;
  

