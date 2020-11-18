import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { Input, Icon, Button, Overlay } from 'react-native-elements';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../assets/colors';
import { addCourseTaken } from '../../redux/actions';
import { HourSelector } from './hoursSelector';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: width(80),
    height: height(5),
  },
  buttonStyle: {
    borderRadius: 5,
    width: width(35),
  },
  button: {
    backgroundColor: COLORS.primaryColor,
  },
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryColor,
    width: width(80),
    height: height(40)
  },
  opaqueBackground: {
    alignItems: 'center',
    backgroundColor: 'rgba(16,16,16,0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  picker: {
    backgroundColor: COLORS.white,
    borderRadius: 20
  },
  title: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },
  selectCourse: {
    alignSelf: 'flex-start',
    color: COLORS.white,
    paddingLeft: 15,
  },
  selectHours: {
    color: COLORS.white,
    marginTop: 20,
    marginBottom: 5,
  }
});

const AddCourseModal = ({ visible, onClose }) => {
  const store = useSelector(({ coursesReducer, sessionReducer }) => ({coursesReducer, sessionReducer}));
  const dispatch = useDispatch();
  const [hours, setHours] = useState(1);
  const [course, setCourse] = useState("");

  const handleHourChange = (value) => {
    setHours(value);
  }

  console.log(hours);
  console.log("Profile: ", store.sessionReducer);
  console.log('Selected course: ', course);

  const handleOnPress= () => {
    const courseTaken = {
      userId: store.sessionReducer.sessionData._id,
      userName: store.sessionReducer.sessionData.name,
      courseId: course._id,
      courseName: course.courseName,
      courseDescription: course.description,
      courseAccessLink: course.accessLink,
      hours,
    };

    dispatch(addCourseTaken(courseTaken));
  }

  const renderPickerItems = (item) => (
    <Picker.Item key={String(item._id)} label={item.courseName} value={item} />
  )

  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <TouchableWithoutFeedback>
        <View style={styles.opaqueBackground}>
          <View style={styles.container}>
            <Text style={styles.title}>Add a new course</Text>
            <View style={styles.picker}>
              <Picker
                style={styles.picker}
                dropdownIconColor={"red"}
                selectedValue={course}
                style={{height: 50, width: width(70)}}
                onValueChange={(itemValue, itemIndex) =>
                  setCourse(itemValue)
              }>
                {store.coursesReducer.courses.map(renderPickerItems)}
              </Picker>
            </View>
            <Text style={styles.selectHours}>Hours in training:</Text>
            <HourSelector 
              hours={hours}
              setHours={setHours}
            />
            <View style={styles.buttonContainer}>
              <Button
                containerStyle={styles.buttonStyle}
                buttonStyle={styles.button}
                disabled={store.coursesReducer.addingCourseTaken}
                title="Cancel"
                onPress={onClose}
                raised
              />
              <Button
                containerStyle={styles.buttonStyle}
                buttonStyle={styles.button}
                title="Add"
                disabled={store.coursesReducer.addingCourseTaken}
                loading={store.coursesReducer.addingCourseTaken}
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
