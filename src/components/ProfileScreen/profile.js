import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen'
import { AddCourseModal } from './addCourseModal';
import { EditCourseModal } from './editCourseModal';
import { removeItem } from '../../asyncStoreManager';
import { keyExtractor } from '../../utils';
import { COLORS } from '../../assets/colors';
import { removeCredentials } from '../../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: "stretch",
    backgroundColor: COLORS.secondaryColorDarker,
  },
  itemContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    width: width(95),
    height: height(10),
    backgroundColor: COLORS.primaryColor,
    marginVertical: 2,
  },
  userIconContainer: {
    borderRadius: 10,
    // marginLeft: 10,
    width: "15%",
    justifyContent: 'center',
  },
  userInfoContainer: {
    // flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: "70%",
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textStyle: {
    color: COLORS.white
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
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    backgroundColor: COLORS.primaryColor,
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  }
});

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const store = useSelector(({ coursesTakenReducer, sessionReducer }) => ({coursesTakenReducer, sessionReducer}));
  const [addModalIsVisible, setAddModalVisible] = useState(false);
  const [editModalIsVisible, setEditModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const checkCredentials = async () => {
    if (store.sessionReducer.hasData === false) {
      navigation.navigate("Login");
    }
  }

  useEffect(() => {
    checkCredentials();
  }, []);

  const handleLogOut = async () => {
    await removeItem('session');
    dispatch(removeCredentials());
    navigation.navigate('Login');
  }

  const Header = () => (
    <View style={styles.header}>
      <Icon type="font-awesome" name="search" color={COLORS.white} size={27} />
      <Text style={styles.headerTitle}>My courses</Text>
      <Icon type="font-awesome" name="power-off" color={COLORS.white} size={27} onPress={handleLogOut} />
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
          <Icon name="user" size={30} type="font-awesome" color={COLORS.white} />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={[styles.nameStyle, styles.textStyle]} numberOfLines={1}> {item.userName} </Text>
          <Text style={styles.textStyle} numberOfLines={1}> {item.courseName} </Text>
          <Text style={styles.textStyle} > {`Training time: ${item.hours} hours`} </Text>
        </View>
        <View style={styles.userIconContainer}>
          <Icon name="edit" size={30} type="font-awesome" color={COLORS.white} />
        </View>
      </View>
    </TouchableHighlight>
  )

  function goCreateRoom() {
    navigation.navigate('Crear sala');
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        data={store.coursesTakenReducer.coursesTaken.filter((item) => item.userName === store.sessionReducer.sessionData.name)}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
      />
      <AddCourseModal visible={addModalIsVisible} onClose={() => setAddModalVisible(false)} />
      <EditCourseModal item={selectedItem} visible={editModalIsVisible} onClose={() => setEditModalVisible(false)} />
      <View style={styles.floatingButton}>
        <Icon type="font-awesome" name="plus" color={COLORS.white} onPress={() => setAddModalVisible(true)} />
      </View>
    </View>
  );
}

export { Profile };