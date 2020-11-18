import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, FlatList, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen'
import { fetchCourses, filterCoursesReset, getCoursesTaken } from '../../redux/actions';
import { keyExtractor } from '../../utils';
import { COLORS } from '../../assets/colors';
import { SearchBar } from './searchBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: "stretch",
    backgroundColor: COLORS.secondaryColorDarker,
  },
  imageContainer: {
    flex: 2,
    alignSelf: 'center',
    height: height(100),
    width: width(100),
  },
  itemContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    width: width(95),
    height: height(10),
    backgroundColor: COLORS.primaryColor,
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
    width: width(15),
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
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    alignSelf: 'center'
  },
  emptyBox: {
    width: 30,
  },
  searchBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height(25),
    width: width(100),
    backgroundColor: COLORS.secondaryColorDarker,
  },
  searchBarTitle: {
    fontSize: 17,
    color: COLORS.white,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBarButtonContainer: {
    width: width(70),
    justifyContent: 'center',
    alignItems: 'center',
    height: height(7),
    flexDirection: "row",
  },
  searchBarInputContainer: {
    flexDirection: "row",
    width: width(85),
    justifyContent: 'center',
    alignItems: 'center',
    height: height(9),
  },
  searchBarTitleContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: width(90),
  }
});

const Home = ({ navigation, store, dispatch }) => {
  // const store = useSelector(({ coursesTakenReducer }) => coursesTakenReducer);
  // const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);

  function getCourses() {
    console.log("Fetching courses from function")
    dispatch(getCoursesTaken());
    dispatch(fetchCourses());
  }

  useEffect(() => {
    console.log('Fetching courses...');
    getCourses();

    return () => {
      console.log('Home unmounted');
    }
  }, []);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  }

  const handleReset = () => {
    dispatch(filterCoursesReset());
  }

  const Header = () => (
    <View style={styles.header}>
      <Icon type="font-awesome" name="search" color={COLORS.white} size={27} onPress={handleShowSearch} />
      <Text style={styles.headerTitle}>Public</Text>
      <View style={styles.emptyBox}></View>
    </View>
  )

  const SearchBarView = () => (
    <SearchBar
      onClose={handleShowSearch}
      containerStyle={styles.searchBarContainer}
      titleStyle={styles.searchBarTitle}
      buttonContainerStyle={styles.searchBarButtonContainer}
      inputContainerStyle={styles.searchBarInputContainer}
      titleContainerStyle={styles.searchBarTitleContainer}
      onReset={handleReset}
    />
  )

  const renderItems = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.userIconContainer}>
        <Icon name="user" size={30} type="font-awesome" color={COLORS.white} />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={[styles.nameStyle, styles.textStyle]} numberOfLines={1}> {item.userName} </Text>
        <Text style={styles.textStyle} numberOfLines={1}> {item.courseName} </Text>
        <Text style={styles.textStyle} > {`Training time: ${item.hours} hours`} </Text>
      </View>
    </View>
  )

  function goCreateRoom() {
    navigation.navigate('Crear sala');
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={showSearch ? SearchBarView : Header}
        data={ store.showSearchResults ? store.filterResults : store.coursesTaken}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

export { Home };
