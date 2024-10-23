import React from 'react';
import { SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import './global.css';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {

  return (
    <ThemeProvider>
    <SafeAreaView className="flex-1">
        <HomeScreen />
    </SafeAreaView>
    </ThemeProvider>
  );
}
