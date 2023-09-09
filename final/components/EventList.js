import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import EventItem from './EventItem';

const EventList = ({ events, onEventPress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventItem event={item} onPress={() => onEventPress(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EventList;