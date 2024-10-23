import React, { useState, useEffect, useContext, useMemo } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from '../components/TaskItem/TaskItem';
import CreateTask from '../components/CreateTask/CreateTask';
import Header from '../components/Header/Header';
import { ThemeContext } from '../context/ThemeContext';

const HomeScreen = () => {
  const { darkMode } = useContext(ThemeContext);
  const [taskList, setTaskList] = useState([]);

  // Function to handle saving a new task
  const handleSaveTask = async (newTask) => {
    try {
      const updatedTaskList = [...taskList, newTask];
      setTaskList(updatedTaskList);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTaskList));
      Alert.alert('Success', 'Task added successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save the task.');
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = async (indexToDelete) => {
    try {
      const updatedTaskList = taskList.filter((_, index) => index !== indexToDelete);
      setTaskList(updatedTaskList);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTaskList));
      Alert.alert('Success', 'Task deleted successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the task.');
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];
      setTaskList(storedTasks);
    };
    loadTasks();
  }, []);

  const renderedTaskList = useMemo(() => {
    return taskList.map((task, index) => (
      <TaskItem 
        key={index} 
        task={task} 
        onDelete={() => handleDeleteTask(index)}
      />
    ));
  }, [taskList, darkMode]);

  return (
    <View className={`p-4 flex-1 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header />

      <CreateTask onSaveTask={handleSaveTask} darkMode={darkMode} />

      <ScrollView className="mt-4">
        {renderedTaskList}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
