import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { Input, Icon, Button, Overlay } from 'react-native-elements';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../assets/colors';
import { deleteCourseTaken, updateCourseTaken } from '../../redux/actions';
import { HourSelector } from './hoursSelector';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: width(60),
    height: height(5),
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
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 40,
    paddingHorizontal: 10,
    textAlign: "center",
  }
});

const EditCourseModal = ({ visible, onClose, item }) => {
  const [hours, setHours] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Edit modal mounted");
    setHours(item.hours);

    return () => {
      console.log("Edit modal unmounted");
    }
  }, [visible]);

  const handleUpdate = () => {
    console.log("Saved");
    dispatch(updateCourseTaken({
      ...item,
      hours,
    }));    
  }

  const handleDelete = () => {
    console.log("Deleting");
    dispatch(deleteCourseTaken({
      ...item,
      hours,
    }))
  }

  const handleClose = () => {
    console.log("Saved");
    onClose();
  }

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
            <Text style={styles.title}>{item.courseName}</Text>
            <HourSelector 
              hours={hours}
              setHours={setHours}
            />
            <View style={styles.buttonContainer}>
              <Icon
                type="font-awesome"
                name="times"
                color={COLORS.primaryColor}
                raised
                reverse
                onPress={handleClose}
              />
              <Icon
                disabled={hours === item.hours}
                disabledStyle={{ backgroundColor: COLORS.secondaryColorDarker }}
                type="font-awesome"
                name="save"
                color={COLORS.primaryColor}
                raised
                reverse
                onPress={handleUpdate}
              />
              <Icon
                type="font-awesome"
                name="trash"
                color={COLORS.primaryColor}
                raised
                reverse
                onPress={handleDelete}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export { EditCourseModal };