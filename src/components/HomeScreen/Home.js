import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, FlatList, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen'
import { fetchCourses } from '../../redux/actions';

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
  }
});

const Home = ({ navigation }) => {
  const store = useSelector(({ coursesReducer }) => coursesReducer);
  const dispatch = useDispatch();

  console.log('Courses: ', store.courses);
  function getCourses() {
    console.log("Fetching courses from function")
    dispatch(fetchCourses());
  }

  useEffect(() => {
    console.log('Fetching courses...');
    getCourses();

    return () => {
      console.log('Home unmounted');
    }
  }, []);

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

  const Header = () => (
    <View style={styles.header}>
      <Icon type="font-awesome" name="search" color="white" size={27} />
    </View>
  )

  const renderItems = ({ item }) => (
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
    </View>
  );
}

export { Home };
