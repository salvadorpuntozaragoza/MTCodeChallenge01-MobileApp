import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,  
} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../assets/colors';
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux';
import { filterCourses } from '../../redux/actions';

const styles = StyleSheet.create({
  button: {
    width: width(35),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBox: {
    width: width(5)
  },
  active: {
    backgroundColor: COLORS.primaryColor
  },
  inactive: {
    backgroundColor: COLORS.secondaryColor
  },
  text: {
    color: COLORS.white,
    fontSize: 17,
  }
});

const SearchBar = ({ onClose, containerStyle, titleStyle, buttonContainerStyle, inputContainerStyle, titleContainerStyle, onReset }) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState('User');
  const [searchText, setSearchText] = useState("");

  const onSelectUser = () => {
    setOption('User');
  }

  const onSelectCourse = () => {
    setOption('Course')
  }

  const handleTextChange = (text) => {
    setSearchText(text);
  }

  const onSearch = () => {
    dispatch(filterCourses({
      filterBy: option,
      searchText: searchText,
    }));
  }

  const handleClose = () => {
    onClose();
    onReset();
  }

  const Button = ({ onPress, title, active }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, active ? styles.active : styles.inactive]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={containerStyle}>
      <View style={titleContainerStyle}>
        <Icon
          name="times"
          type="font-awesome"
          color={COLORS.white}
          size={26}
          onPress={handleClose}
        />
        <Text style={titleStyle}>Filter</Text>
        <View style={styles.emptyBox} />
      </View>
      <View style={buttonContainerStyle}>
        <Button
          onPress={onSelectUser}
          title="By User"
          active={option === 'User'}
        />
        <Button
          onPress={onSelectCourse}
          title="By course"
          active={option === 'Course'}
        />
      </View>
      <View style={inputContainerStyle}>
        <Input
          placeholder={option}
          onChangeText={handleTextChange}
        />
        <Icon
          name="search"
          type="font-awesome"
          size={23}
          color={COLORS.white}
          onPress={onSearch}
        />
      </View>
    </View>
  )
}

export { SearchBar };
