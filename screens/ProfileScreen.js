import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

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
  const [bhv, setBHV] = useState(false);
  const [ehbo, setEHBO] = useState(false);

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
        setBHV(parsedProfileData.bhv);
        setEHBO(parsedProfileData.ehbo);
      }
    } catch (error) {
      console.log('Error loading profile:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadProfile();
    }, [])
  );

  const renderNonResuscitation = () => {
    return nonResuscitation ? 'Yes' : 'No';
  };

  const handleEditProfile = () => {
    navigation.navigate('Edit profile');
  };

  const renderBHVAndEHBO = () => {
    if (bhv && ehbo) {
      return 'BHV, EHBO';
    } else if (bhv) {
      return 'BHV';
    } else if (ehbo) {
      return 'EHBO';
    } else {
      return 'None';
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        {profilePhoto && <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />}
        <Text style={styles.fullName}>{fullName}</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>BHV/EHBO experience?</Text>
        <Text>{renderBHVAndEHBO()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Needed for resuscitation?</Text>
        <Text>{renderNonResuscitation()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disabilities</Text>
        <Text>{disability}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text>{skills}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Age</Text>
        <Text>{age}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Amount of pets</Text>
        <Text>{pets}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Amount of household members</Text>
        <Text>{householdMembers}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spoken Languages</Text>
        <Text>{spokenLanguages}</Text>
      </View>

      {bio ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text>{bio}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 12,
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ProfileScreen;


