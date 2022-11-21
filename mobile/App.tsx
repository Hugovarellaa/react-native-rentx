import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/Screens/Home';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}