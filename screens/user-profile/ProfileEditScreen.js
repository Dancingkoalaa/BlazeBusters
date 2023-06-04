import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileEditScreen = () => {
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
    } catch (error) {
      console.log('Error saving profile:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <TextInput
        style={styles.input}
        value={profilePhoto}
        onChangeText={setProfilePhoto}
      />

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
        value={nonResuscitation}
        onChangeText={setNonResuscitation}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 100, // Add bottom margin for the button to be consistently visible
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
    padding: 8,
  },
  buttonContainer: {
    marginBottom: 16, // Add margin to create separation from the scrollable content
  },
});

export default ProfileEditScreen;

