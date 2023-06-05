import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const NeighbourProfileScreen = ({ route }) => {
  const { profile } = route.params;
  const { name, age, profilePhoto, bio, bhv, ehbo, resuscitationNeeded, disabilities, skills, petCount, householdMembers, languages } = profile;

  return (
    <View style={styles.container}>
      <Image source={profilePhoto} style={styles.profilePhoto} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>Age: {age}</Text>
      <Text style={styles.bio}>{bio}</Text>

      <View style={styles.additionalInfo}>
        <Text style={styles.infoLabel}>BHV/EHBO:</Text>
        <Text style={styles.infoValue}>{bhv ? 'BHV' : ''}{bhv && ehbo ? ', ' : ''}{ehbo ? 'EHBO' : ''}</Text>
      </View>

      {resuscitationNeeded && (
        <View style={styles.additionalInfo}>
          <Text style={styles.infoLabel}>Resuscitation Needed:</Text>
          <Text style={styles.infoValue}>Yes</Text>
        </View>
      )}

      {disabilities !== '' && (
        <View style={styles.additionalInfo}>
          <Text style={styles.infoLabel}>Disabilities:</Text>
          <Text style={styles.infoValue}>{disabilities}</Text>
        </View>
      )}

      {skills.length > 0 && (
        <View style={styles.additionalInfo}>
          <Text style={styles.infoLabel}>Skills:</Text>
          <Text style={styles.infoValue}>{skills.join(', ')}</Text>
        </View>
      )}

      <View style={styles.additionalInfo}>
        <Text style={styles.infoLabel}>Number of Pets:</Text>
        <Text style={styles.infoValue}>{petCount}</Text>
      </View>

      <View style={styles.additionalInfo}>
        <Text style={styles.infoLabel}>Household Members:</Text>
        <Text style={styles.infoValue}>{householdMembers}</Text>
      </View>

      <View style={styles.additionalInfo}>
        <Text style={styles.infoLabel}>Spoken Languages:</Text>
        <Text style={styles.infoValue}>{languages.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
  },
  additionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  infoValue: {
    fontSize: 14,
  },
});

export default NeighbourProfileScreen;
