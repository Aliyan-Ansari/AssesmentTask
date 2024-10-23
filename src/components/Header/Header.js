import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View className={`flex-row justify-between items-center p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
      <Text className={`${darkMode ? 'text-white' : 'text-black'} text-xl font-bold`}>To-Do List</Text>
      <TouchableOpacity onPress={toggleTheme} className="flex-row items-center">
        {darkMode ? (
          <Icon name="sunny" size={24} color="yellow" />
        ) : (
          <Icon name="moon" size={24} color="gray" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
