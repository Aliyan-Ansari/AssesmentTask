import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import CountrySelector from '../CountrySelector/CountrySelector';

const CreateTask = ({ onSaveTask, darkMode }) => {
  const [task, setTask] = useState({ user: '', country: '', description: '' });

  const handleSaveTask = () => {
    if (task.description.length > 120) {
      Alert.alert('Error', 'Description cannot exceed 120 characters.');
      return;
    }
    if (!task?.user?.trim()?.length === 0 || !task?.country?.trim()?.length === 0 || !task?.description?.trim()?.length === 0) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    onSaveTask(task);
    setTask({ user: '', country: '', description: '' });
  };

  return (
    <View className={`p-4 my-4 border rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <TextInput
        placeholder="User Assigned"
        placeholderTextColor={darkMode ? 'gray' : 'black'}
        value={task.user}
        onChangeText={(text) => setTask({ ...task, user: text })}
        className={`border rounded-lg p-2 mb-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}
      />

      <CountrySelector task={task} onSelect={(country) => setTask({ ...task, country })} />

      <TextInput
        placeholder="Description"
        placeholderTextColor={darkMode ? 'gray' : 'black'}
        value={task.description}
        onChangeText={(text) => setTask({ ...task, description: text })}
        className={`border rounded-lg p-2 mb-4 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}
        maxLength={120}
      />

      <Button title="Add Task" color={darkMode ? '#374151' : '#6b7280'} onPress={handleSaveTask} />
    </View>
  );
};

export default CreateTask;
