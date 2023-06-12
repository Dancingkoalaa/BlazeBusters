import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EventsScreen() {
  const events = [
    { id: 1, title: 'Buurt picnic', participants: ['John', 'Jane', 'Alice'] },
    { id: 2, title: 'Event 2', participants: ['Bob', 'Sarah'] },
    // Add more events
  ];

  return (
    <View style={styles.container}>
      {events.map((event) => (
        <View key={event.id} style={styles.eventContainer}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventParticipants}>
            Participants: {event.participants.join(', ')}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  eventContainer: {
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventParticipants: {
    fontSize: 16,
  },
});
