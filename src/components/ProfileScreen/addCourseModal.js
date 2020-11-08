import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { Input, Icon, Button, Overlay } from 'react-native-elements';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: width(80),
    height: height(5),
    // backgroundColor: 'blue'
  },
  buttonStyle: {
    borderRadius: 5,
    width: width(35),
    // height: height(5),
  },
  button: {
    backgroundColor: 'red'
  },
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    // alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#3c3c3c',
    width: width(80),
    height: height(50)
  },
  inputStyle: {
    borderBottomColor: 'red',
  },
  opaqueBackground: {
    alignItems: 'center',
    backgroundColor: 'rgba(16,16,16,0.5)',
    flex: 1,
    justifyContent: 'center',
  },
});

const AddCourseModal = ({ visible, onClose }) => {
  const store = useSelector(({ coursesReducer }) => coursesReducer);
  const [hours, setHours] = useState(0);
  const [course, setCourse] = useState("")

  const handleHourChange = (value) => {
    setHours(value);
  }

  console.log("Profile: ", store);
  console.log('Selected course: ', course._id);

  const handleOnPress= () => {
    console.log('Pressed');
  }

  const renderPickerItems = (item) => (
    <Picker.Item label={item.courseName} value={item} />
  )

  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.opaqueBackground}>
          <View style={styles.container}>
            <Picker 
              selectedValue={course}
              style={{height: 50, width: width(70)}}
              onValueChange={(itemValue, itemIndex) =>
                setCourse(itemValue)
            }>
              {store.courses.map(renderPickerItems)}
            </Picker>
            <Input
              keyboardType="decimal-pad"
              value={hours}
              onChangeText={handleHourChange}
              // errorMessage={ invalidEmail ? "Invalid email" : "" }
              placeholder="Hours in training"
              placeholderTextColor='white'
              leftIcon={{ type: 'font-awesome', name: 'hourglass-1', color: 'white', size: 16 }}
              inputContainerStyle={styles.inputStyle}
              inputStyle={{ color: "white" }}
            />
            <View style={styles.buttonContainer}>
              <Button
                containerStyle={styles.buttonStyle}
                buttonStyle={styles.button}
                title="Cancel"
                onPress={onClose}
                raised
              />
              <Button
                containerStyle={styles.buttonStyle}
                buttonStyle={styles.button}
                title="Add"
                onPress={handleOnPress}
                raised
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export { AddCourseModal };
