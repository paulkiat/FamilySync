// BUTTON_FloatingCall2Action.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const FAB_AddEvent = ({ onSave }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDuration, setEventDuration] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSave = () => {
    onSave(eventName, eventDuration, eventDescription);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text>Event Name:</Text>
          <TextInput
            value={eventName}
            onChangeText={setEventName}
          />
          <Text>Event Duration:</Text>
          <TextInput
            value={eventDuration}
            onChangeText={setEventDuration}
          />
          <Text>Event Description:</Text>
          <TextInput
            value={eventDescription}
            onChangeText={setEventDescription}
          />
          <Button
            title="Save"
            onPress={handleSave}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#2196F3',
    borderRadius: 28,
    elevation: 8,
  },
  fabText: {
    fontSize: 24,
    color: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    height: '33%',
  },
});

export default FAB_AddEvent;