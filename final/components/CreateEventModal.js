import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const CreateEventModal = ({ isVisible, onSave, onClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDuration, setEventDuration] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSave = () => {
    onSave({
      name: eventName,
      duration: eventDuration,
      description: eventDescription,
    });
    setEventName('');
    setEventDuration('');
    setEventDescription('');
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <TextInput
          placeholder="Event Name"
          value={eventName}
          onChangeText={setEventName}
        />
        <TextInput
          placeholder="Event Duration"
          value={eventDuration}
          onChangeText={setEventDuration}
        />
        <TextInput
          placeholder="Event Description"
          value={eventDescription}
          onChangeText={setEventDescription}
        />
        <Button title="Save" onPress={handleSave} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
  },
});

export default CreateEventModal;