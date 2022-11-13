import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

