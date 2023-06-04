import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [skills, setSkills] = useState('');
  const [disability, setDisability] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [age, setAge] = useState('');
  const [pets, setPets] = useState('');
  const [householdMembers, setHouseholdMembers] = useState('');
  const [spokenLanguages, setSpokenLanguages] = useState('');
  const [nonResuscitation, setNonResuscitation] = useState(false);
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

  const renderNonResuscitation = () => {
    return nonResuscitation ? 'Yes' : 'No';
  };

  const handleEditProfile = () => {
    navigation.navigate('Edit profile');
  };

  return (
    <View style={styles.container}>
      <Text>Full Name: {fullName}</Text>
      <Text>Skills: {skills}</Text>
      <Text>Disability: {disability}</Text>
      {profilePhoto && <Image source={{ uri: profilePhoto }} style={styles.photo} />}
      <Text>Age: {age}</Text>
      <Text>Pets: {pets}</Text>
      <Text>Household Members: {householdMembers}</Text>
      <Text>Spoken Languages: {spokenLanguages}</Text>
      <Text>Non-Resuscitation: {renderNonResuscitation()}</Text>
      <Text>Bio: {bio}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 12,
  },
});

export default ProfileScreen;

