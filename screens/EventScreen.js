import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function EventsScreen({ limit }) {
  const events = [
    {
      id: 1,
      title: 'Buurt picnic',
      host: 'John',
      description: 'Join us for a fun picnic in the neighborhood park.',
      participants: ['John', 'Jane', 'Ethan'],
      time: '12:00 PM - 3:00 PM',
      location: 'Central Park',
    },
    {
      id: 2,
      title: 'Neighborhood Birthday Party',
      host: 'Daniel',
      description: 'Join us for a neighborhood birthday party to celebrate Daniel\'s special day!',
      participants: ['Daniel', 'Olivia', 'Sophia', 'Liam', 'Emma'],
      time: '2:00 PM - 5:00 PM',
      location: 'Community Park',
    },
    {
      id: 3,
      title: 'EHBO Course',
      host: 'Sarah',
      description: 'Learn essential first aid skills in this EHBO course.',
      participants: ['Sarah', 'Michael', 'Emily'],
      time: '10:00 AM - 12:00 PM',
      location: 'Community Center',
    },
    {
      id: 4,
      title: 'Neighborhood BBQ Party',
      host: 'Alex',
      description: 'Join us for a fun-filled neighborhood BBQ party.',
      participants: ['Alex', 'Sophia', 'Liam', 'Emma'],
      time: '4:00 PM - 7:00 PM',
      location: 'Backyard of 123 Main Street',
    },
  ].slice(0, limit);

  return (
    <ScrollView style={styles.container}>
      {events.map((event) => (
        <View key={event.id} style={styles.eventContainer}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventHost}>Hosted by: {event.host}</Text>
          <Text style={styles.eventDescription}>{event.description}</Text>
          <Text style={styles.eventLocation}>Location: {event.location}</Text>
          <Text style={styles.eventTime}>Time: {event.time}</Text>
          <Text style={styles.eventParticipantsTitle}>Participants:</Text>
          <View style={styles.participantsContainer}>
            {event.participants.map((participant, index) => (
              <View key={index} style={styles.participantContainer}>
                <Image source={require('../images/person.png')} style={styles.participantImage} />
                <Text style={styles.participantName}>{participant}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  eventContainer: {
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventHost: {
    fontSize: 16,
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 16,
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 16,
    marginBottom: 5,
  },
  eventParticipantsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  participantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  participantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  participantImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  participantName: {
    fontSize: 14,
  },
});
