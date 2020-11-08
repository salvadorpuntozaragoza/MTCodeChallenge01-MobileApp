import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getItem(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e);
    return null;
  }
}

export async function saveItem(key, item) {
  try {
    const jsonValue = JSON.stringify(item)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch(e) {
    console.log(e);
    return null;
  }
}