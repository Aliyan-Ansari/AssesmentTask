import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskItem = ({ task, onDelete }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View className={`p-4 mb-4 border rounded-lg flex-row justify-between ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
      <View>
        <Text className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          User: {task.user}
        </Text>
        <Text className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Country: {task.country}
        </Text>
        <Text className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Description: {task.description}
        </Text>
      </View>
      <TouchableOpacity onPress={onDelete} className="ml-4">
        <Icon name="trash" size={24} color={darkMode ? 'red' : 'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
