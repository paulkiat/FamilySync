import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Animated, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

import { colors, typography, spacing } from '../styles/styles';
import mockEvents from '../data/mockEvents';

const ScheduledEventsScreen = () => {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const eventsForToday = mockEvents.filter(event => event.date.startsWith(today.toISOString().split('T')[0]));
  const eventsForNextWeek = mockEvents.filter(event => event.date.startsWith(nextWeek.toISOString().split('T')[0]));

  const combinedEvents = [...eventsForToday, ...eventsForNextWeek];

  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

  const handleDateSelection = (day) => {
    const selectedEvents = mockEvents.filter(event => event.date.startsWith(day.dateString));
    setSelectedDate(day.dateString);
    setEventsForSelectedDate(selectedEvents);
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderEvent = ({ item }) => (
    <View style={styles.eventCard}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventTime}>{item.date.split(' ')[1]}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </View>
  );

  const getDayOfWeek = (date) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return days[date.getDay()];
};

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        overScrollMode="always"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.dayColumn}>
            <Text style={styles.dayText}>{getDayOfWeek(today)}</Text>
            <View style={styles.dayCircle}>
              <Text style={styles.dayNumber}>{today.getDate()}</Text>
            </View>
          </View>
          <View style={styles.eventColumn}>
            {combinedEvents.length === 0 ? (
              <Text style={styles.noEventsText}>No FamilySync events on this date</Text>
            ) : (
              <FlatList
                data={combinedEvents}
                keyExtractor={item => item.id}
                renderItem={renderEvent}
              />
            )}
          </View>
        </View>
      <Text style={styles.endOfListText}>End of list</Text>
      </Animated.ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => setCalendarVisible(true)}
      >
        <Ionicons name="calendar" size={24} color="white" />
      </TouchableOpacity>

      {/* Calendar Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCalendarVisible}
        onRequestClose={() => setCalendarVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Calendar
              style={{ width: '100%' }}
              onDayPress={handleDateSelection} // Added onDayPress handler
              markedDates={{
                [today.toISOString().split('T')[0]]: { selected: true, marked: true },
                [nextWeek.toISOString().split('T')[0]]: { marked: true },
                [selectedDate]: { selected: true, marked: true, dotColor: 'blue' },
              }}
            />
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setCalendarVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          {/* Pop-up for selected date's events */}
          {selectedDate && (
            <View style={styles.overlay}>
            <View style={styles.selectedDatePopup}>
              <Text style={styles.selectedDateTitle}>Events for {selectedDate}</Text>
              <FlatList
                data={eventsForSelectedDate}
                keyExtractor={item => item.id}
                renderItem={renderEvent}
              />
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => setSelectedDate(null)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: colors.background,
  },
  contentWrapper: {
    flexDirection: 'row',
    padding: 12,
  },
  dayColumn: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 9,
  },
  dayText: {
    fontSize: 16,
    fontFamily: typography.primary,
    color: '#333',
    marginBottom: 3,
  },
  dayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontSize: 18,
    fontFamily: typography.primary,
    color: 'white',
  },
  eventColumn: {
    flex: 1,
  },
  eventCard: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 6,
  },
  eventTitle: {
    fontSize: 18,
    fontFamily: typography.primary,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 16,
    fontFamily: typography.primary,
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    fontFamily: typography.primary,
  },
  noEventsText: {
    fontSize: 18,
    fontFamily: typography.primary,
    color: '#333',
    textAlign: 'center',
    marginTop: 24,
  },
  endOfListText: {
    fontSize: 16,
    fontFamily: typography.primary,
    color: '#333',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: colors.primary,
    borderRadius: 28,
    elevation: 8,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Aligning the modal to the bottom
  },
  modalView: {
    height: Dimensions.get('window').height / 2, // Setting the height to half of the screen
    backgroundColor: 'white',
    borderRadius: 8,
    padding: spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 }, // Negative Y-offset to cast shadow upwards
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'center', // Centering the button
    marginTop: 20,
    padding: 10,
    width: '60%', // Adjusting the width
    alignItems: 'center', // Centering the text
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center', // Centering the text
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDatePopup: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  selectedDateTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default ScheduledEventsScreen;