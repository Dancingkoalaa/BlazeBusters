import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const NeighbourCircleScreen = ({ navigation }) => {
  // Hardcoded data for profile icons
  const profiles = [
    {
      id: '1',
      name: 'John Doe',
      age: 25,
      bhv: true,
      ehbo: false,
      resuscitationNeeded: true,
      disabilities: 'Handicap on the right arm',
      skills: ['Dancing', 'Singing'],
      petCount: 1,
      householdMembers: 4,
      languages: ['English'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 32,
      bhv: false,
      ehbo: false,
      resuscitationNeeded: false,
      disabilities: '',
      skills: [],
      petCount: 0,
      householdMembers: 2,
      languages: ['English', 'Spanish'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '3',
      name: 'Mike Johnson',
      age: 41,
      bhv: false,
      ehbo: false,
      resuscitationNeeded: true,
      disabilities: 'None',
      skills: ['Cooking', 'Gardening'],
      petCount: 2,
      householdMembers: 3,
      languages: ['English'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '4',
      name: 'Emily Davis',
      age: 28,
      bhv: false,
      ehbo: false,
      resuscitationNeeded: false,
      disabilities: '',
      skills: ['Painting'],
      petCount: 0,
      householdMembers: 1,
      languages: ['English', 'French'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '5',
      name: 'Alex Wilson',
      age: 37,
      bhv: true,
      ehbo: false,
      resuscitationNeeded: false,
      disabilities: 'None',
      skills: [],
      petCount: 1,
      householdMembers: 2,
      languages: ['English', 'German'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '6',
      name: 'Sarah Brown',
      age: 29,
      bhv: false,
      ehbo: false,
      resuscitationNeeded: false,
      disabilities: '',
      skills: ['Photography', 'Writing'],
      petCount: 1,
      householdMembers: 4,
      languages: ['English'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '7',
      name: 'Daniel Taylor',
      age: 33,
      bhv: false,
      ehbo: true,
      resuscitationNeeded: false,
      disabilities: '',
      skills: [],
      petCount: 0,
      householdMembers: 2,
      languages: ['English', 'Spanish'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '8',
      name: 'Olivia Clark',
      age: 36,
      bhv: true,
      ehbo: true,
      resuscitationNeeded: false,
      disabilities: '',
      skills: ['Yoga'],
      petCount: 2,
      householdMembers: 3,
      languages: ['English'],
      profilePhoto: require('../images/person.png')
    },
    {
      id: '9',
      name: 'Ethan Lee',
      age: 27,
      bhv: false,
      ehbo: false,
      resuscitationNeeded: false,
      disabilities: 'None',
      skills: ['Coding'],
      petCount: 0,
      householdMembers: 1,
      languages: ['English', 'Chinese'],
      profilePhoto: require('../images/person.png')
    },
  ];

 
  // Render item for each profile icon
  const renderProfileItem = ({ item }) => (
    <TouchableOpacity
      style={styles.profileItem}
      onPress={() => navigation.navigate('Neighbour profile', { profile: item })}
    >
      <Image source={item.profilePhoto} style={styles.profileIcon} />
      <Text style={styles.profileName}>{item.name}</Text>
      <Text style={styles.profileAge}>{item.age}</Text>
      {item.bhv ? (
        <View style={styles.bhvIcon}>
          <Text style={styles.bhvText}>BHV</Text>
        </View>
      ) : null}
      {item.ehbo ? (
        <View style={styles.ehboIcon}>
          <Text style={styles.ehboText}>EHBO</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click to read a profile</Text>
      <FlatList
        data={profiles}
        renderItem={renderProfileItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.profileList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  profileList: {
    flexGrow: 1,
  },
  profileItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileAge: {
    fontSize: 12,
    color: 'gray',
  },
  bhvIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  bhvText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  ehboIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  ehboText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default NeighbourCircleScreen;