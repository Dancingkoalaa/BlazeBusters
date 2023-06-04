import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [skills, setSkills] = useState('');
  const [disability, setDisability] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [age, setAge] = useState('');
  const [pets, setPets] = useState('');
  const [householdMembers, setHouseholdMembers] = useState('');
  const [spokenLanguages, setSpokenLanguages] = useState('');
  const [nonResuscitation, setNonResuscitation] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    loadProfile(); // Load the profile data on component mount
  }, []);

  const loadProfile = async () => {
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
        setBio(parsedProfileData.bio);
      }
    } catch (error) {
      console.log('Error loading profile:', error);
    }
  };

  const navigateToEditProfile = () => {
    navigation.navigate('Edit profile');
  };

  return (
    <View style={styles.container}>
      <Text>Full Name: {fullName}</Text>
      <Text>Skills: {skills}</Text>
      <Text>Disability: {disability}</Text>
      <Text>Profile: {profilePhoto}</Text>
      <Text>Age: {age}</Text>
      <Text>Amount of pets: {pets}</Text>
      <Text>Amount of household members: {householdMembers}</Text>
      <Text>Age: {age}</Text>
      <Text>Resuscitation?: {nonResuscitation}</Text>
      <Text>Spoken languages: {spokenLanguages}</Text>
      <Text>About me: {bio}</Text>

      <TouchableOpacity style={styles.editButton} onPress={navigateToEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  editButton: {
    marginTop: 16,
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

