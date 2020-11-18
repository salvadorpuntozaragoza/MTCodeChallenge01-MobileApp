import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container: {
    marginBottom: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hoursText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

const HourSelector = ({ hours, setHours }) => {
  // const [hours, setHours] = useState(0);

  const increaseHours = () => {
    setHours(hours + 1);
  }

  const decreaseHours = () => {
    setHours(hours - 1)
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight disabled={hours === 0} style={styles.button} onPress={decreaseHours}>
        <Text>-</Text>
      </TouchableHighlight>

      <Text style={styles.hoursText}>{`${hours} hours`}</Text>

      <TouchableHighlight disabled={hours === 24} style={styles.button} onPress={increaseHours}>
        <Text>+</Text>
      </TouchableHighlight>
    </View>
  )
}

export { HourSelector };