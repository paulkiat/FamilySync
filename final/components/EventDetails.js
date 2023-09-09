import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const EventDetails = ({ route, navigation }) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const event = route?.params?.event;

  useEffect(() => {
    if (!event) {
      setModalVisible(false);
      navigation.goBack();
    }
  }, [event, navigation]);

  const hideModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={hideModal}
        onSwipeComplete={hideModal}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.label}>Event Name:</Text>
          <Text>{event?.title}</Text>

          <Text style={styles.label}>Event Date:</Text>
          <Text>{event?.date}</Text>

          <Text style={styles.label}>Event Duration:</Text>
          <Text>{event?.duration}</Text>

          <Text style={styles.label}>Event Description:</Text>
          <Text>{event?.description}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  modal: {
    justifyContent: 'center',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default EventDetails;