// EventTypesScreen.js
import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import EventItem from '../components/EventItem';
import FAB_AddEvent from '../components/Button_FloatingCall2Action';
import mockEvents from '../data/mockEvents';
import { colors, typography, spacing } from '../styles/styles';

const EventTypesScreen = ({ navigation }) => {

  const handleEventPress = (event) => {
    navigation.navigate('EventDetails', { event });
    console.log(event)
  };

  const handleSaveEvent = (name, duration, description) => {
    // Save the event details to the backend or local storage
    // For now, we'll just log the details
    console.log('name: '+name, 'duration: '+duration, 'desc: '+description);
    // setModalVisible(false);
  };

  const renderEventItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleEventPress(item)}>
      <View style={[styles.colorBar, { backgroundColor: item.color || colors.primary }]} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDuration}>{item.duration} min</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={mockEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
      />
      <FAB_AddEvent onSave={handleSaveEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  colorBar: {
    height: 6,
    width: '100%',
    borderRadius: 3,
    marginBottom: spacing.medium,
  },
  eventTitle: {
    fontSize: 20,
    fontFamily: typography.primary,
    color: colors.text,
    marginBottom: spacing.xsmall,
  },
  eventDuration: {
    fontSize: 18,
    fontFamily: typography.secondary,
    color: colors.text,
    marginBottom: spacing.xsmall,
  },
  eventDescription: {
    fontSize: 16,
    fontFamily: typography.secondary,
    color: colors.text,
  },
});

export default EventTypesScreen;