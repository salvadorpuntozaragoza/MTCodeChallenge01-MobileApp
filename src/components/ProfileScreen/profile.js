import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen'
import { AddCourseModal } from './addCourseModal';
import { EditCourseModal } from './editCourseModal';
import { removeItem } from '../../asyncStoreManager';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: "stretch",
    backgroundColor: '#2c2c2c',
  },
  imageContainer: {
    flex: 2,
    alignSelf: 'center',
    height: height(100),
    width: width(100),
    backgroundColor: "#AAAAAA"
  },
  itemContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    width: width(95),
    height: height(10),
    backgroundColor: 'white',
    marginVertical: 2,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: "#DDBBBB",
    flex: 1,
    height: height(30),
    justifyContent: 'center',
    paddingHorizontal: width(5),
    width: width(85),
  },
  buttonStyle: {
    marginBottom: 15,
    borderRadius: 20
  },
  button: {
    backgroundColor: 'red'
  },
  userIconContainer: {
    borderRadius: 10,
    marginLeft: 10,
    width: width(10),
    justifyContent: 'center',
  },
  userInfoContainer: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  header: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    height: height(6),
    alignItems: 'center',
  },
  floatingButton: {
    position: "absolute",
    borderRadius: 30,
    top: height(82),
    left: width(85),
    width: 50,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center'
  }
});

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [addModalIsVisible, setAddModalVisible] = useState(false);
  const [editModalIsVisible, setEditModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const data = [
    {
      name: 'lol',
      course: 'Basic git concepts - From zero to master in 20 hours',
      hours: 17,
    },
    {
      name: 'lol',
      course: 'Basic git concepts - From zero to master in 20 hours',
      hours: 17,
    },
    {
      name: 'lol',
      course: 'Basic git concepts - From zero to master in 20 hours',
      hours: 17,
    },
  ]

  const handleLogOut = async () => {
    await removeItem('session');
    navigation.navigate('Session');
  }

  const Header = () => (
    <View style={styles.header}>
      <Icon type="font-awesome" name="search" color="white" size={27} />
      <Icon type="font-awesome" name="power-off" color="white" size={27} onPress={handleLogOut} />
    </View>
  )

  function handleTouch(item) {
    setSelectedItem(item);
    setEditModalVisible(true);
  }

  const renderItems = ({ item }) => (
    <TouchableHighlight onPress={() => handleTouch(item)}>
      <View style={styles.itemContainer}>
        <View style={styles.userIconContainer}>
          <Icon name="user" size={30} type="font-awesome" color="red" />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.nameStyle} numberOfLines={1}> {item.name} </Text>
          <Text numberOfLines={1}> {item.course} </Text>
          <Text> {`Training time: ${item.hours} hours`} </Text>
        </View>
      </View>
    </TouchableHighlight>
  )

  const keyExtractor = (item, index) => String(index)

  function goCreateRoom() {
    navigation.navigate('Crear sala');
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        data={data}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
      />
      <AddCourseModal visible={addModalIsVisible} onClose={() => setAddModalVisible(false)} />
      <EditCourseModal item={selectedItem} visible={editModalIsVisible} onClose={() => setEditModalVisible(false)} />
      <View style={styles.floatingButton}>
        <Icon type="font-awesome" name="plus" color="white" onPress={() => setAddModalVisible(true)} />
      </View>
    </View>
  );
}

export { Profile };