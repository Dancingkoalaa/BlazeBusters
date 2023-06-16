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
    <ScrollView style={{ backgroundColor: '#FFFFFF' }} contentContainerStyle={styles.container}>
      <View style={styles.profileContainerWrapper}>
      <View style={styles.profileContainer}>
        {profilePhoto && <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />}
        <Text style={[styles.fullName, { color: '#25313D' }]}>{fullName}</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    {bio ? (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Bio</Text>
          <Text style={{ color: '#25313D' }}>{bio}</Text>
        </View>
      ) : null}

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Spoken Languages</Text>
        <Text style={{ color: '#25313D' }}>{spokenLanguages}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>BHV/EHBO experience?</Text>
        <Text style={{ color: '#25313D' }}>{renderBHVAndEHBO()}</Text>
      </View>
  
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Needed for resuscitation?</Text>
        <Text style={{ color: '#25313D' }}>{renderNonResuscitation()}</Text>
      </View>
  
     
    <View style={styles.skillsDisabilitiesContainer}>
      <View style={styles.skillsSection}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Skills</Text>
        <Text style={{ color: '#25313D' }}>{skills}</Text>
      </View>
      <View style={styles.disabilitiesSection}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Disabilities</Text>
        <Text style={{ color: '#25313D' }}>{disability}</Text>
      </View>
    </View>
  
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Age</Text>
        <Text style={{ color: '#25313D' }}>{age}</Text>
      </View>
  
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Amount of pets</Text>
        <Text style={{ color: '#25313D' }}>{pets}</Text>
      </View>
  
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: '#25313D' }]}>Amount of household members</Text>
        <Text style={{ color: '#25313D' }}>{householdMembers}</Text>
      </View>
  
  
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  profileContainerWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    paddingVertical: 20, // Adjust this value as needed
    paddingHorizontal: 10,
  },
  profileContainer: {
    alignItems: 'center',
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
    color: '#FFFFFF',
  },
  editButton: {
    backgroundColor: '#F98D50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  editButtonText: {
    color: '#FFFFFF',
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
    color: '#FFFFFF',
  },
  skillsDisabilitiesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  skillsSection: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 10,
  },
  disabilitiesSection: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 10,
  },
});




export default ProfileScreen;


