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
            navigation.goBack({ profileData }); // Pass the updated profile data as a parameter
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
    <KeyboardAvoidingView style={[styles.container, { backgroundColor: '#FFFFFF' }]} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.label, { color: '#25313D' }]}>Full Name:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          placeholderTextColor="#FFFFFF"
        />
          <Text style={[styles.label, { color: '#25313D' }]}>Biography(optional):</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
          value={bio}
          onChangeText={setBio}
          multiline
          placeholder="Enter your biography..."
          placeholderTextColor="#25313D"
        />
  
        <View style={styles.skillsDisabilitiesContainer}>
          <View style={styles.skillsSection}>
            <Text style={[styles.label, { color: '#25313D' }]}>Skills:</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
              value={skills}
              onChangeText={setSkills}
              placeholder="Enter your skills"
              placeholderTextColor="#FFFFFF"
            />
          </View>
          <View style={styles.disabilitiesSection}>
            <Text style={[styles.label, { color: '#25313D' }]}>Disabilities:</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
              value={disability}
              onChangeText={setDisability}
              placeholder="Enter your disability"
              placeholderTextColor="#FFFFFF"
            />
          </View>
        </View>
  
        <Text style={[styles.label, { color: '#25313D' }]}>Profile Photo/Avatar:</Text>
        <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
          {profilePhoto ? (
            <Image source={{ uri: profilePhoto }} style={styles.photo} />
          ) : (
            <Text style={styles.choosePhotoText}>Choose Photo</Text>
          )}
        </TouchableOpacity>
  
        <Text style={[styles.label, { color: '#25313D' }]}>Age:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Enter your age"
          placeholderTextColor="#FFFFFF"
        />
  
        <Text style={[styles.label, { color: '#25313D' }]}>Pets:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
          value={pets}
          onChangeText={setPets}
          placeholder="Enter your pets"
          placeholderTextColor="#FFFFFF"
        />
  
        <Text style={[styles.label, { color: '#25313D' }]}>Number of People in Household:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
          value={householdMembers}
          onChangeText={setHouseholdMembers}
          keyboardType="numeric"
          placeholder="Enter the number of household members"
          placeholderTextColor="#FFFFFF"
        />
  
        <Text style={[styles.label, { color: '#25313D' }]}>Spoken Languages:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECECEC', color: '#25313D' }]}
          value={spokenLanguages}
          onChangeText={setSpokenLanguages}
          placeholder="Enter your spoken languages"
          placeholderTextColor="#FFFFFF"
        />
  
        <Text style={[styles.label, { color: '#25313D' }]}>Non-Resuscitation Declaration:</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={nonResuscitation}
            onValueChange={setNonResuscitation}
            trackColor={{ false: '#767577', true: '#F98D50' }}
            thumbColor={nonResuscitation ? '#f5dd4b' : '#f4f3f4'}
          />
          <Text style={{ color: '#FFFFFF' }}>{nonResuscitation ? 'Yes' : 'No'}</Text>
        </View>
  
        <Text style={[styles.label, { color: '#25313D' }]}>BHV or/and EHBO:</Text>
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
  
        <Button title="Save Profile" onPress={saveProfile} color="#25313D
        
        
        " />
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
  },
  photoContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  photo: {
    width: 100,
    height: 100,
  },
  choosePhotoText: {
    fontSize: 16,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  buttonSelected: {
    backgroundColor: '#F98D50',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileEditScreen;
