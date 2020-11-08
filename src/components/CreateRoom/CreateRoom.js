import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

const CreateRoom = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Input
        label="Id de la sala"
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        placeholder="Id"
      />
      <Input
        label="Nombre de la sala"
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        placeholder="Name"
      />
      <Button 
        title="Crear sala"
      />
    </View>
  );
}

export { CreateRoom };
