import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTask = async (task) => {
  try {
    const tasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];
    tasks.push(task);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error storing task', error);
  }
};
