import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Loading } from './src/Components/Loading';
import { Scheduling } from './src/Screens/Scheduling';
import theme from './src/styles/theme';


export default function App() {

  const [isLoading] = useFonts({
    Inter_400Regular, Inter_500Medium, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold
  })

  return (
    <ThemeProvider theme={theme}>
      {
        isLoading ? <Scheduling /> : <Loading />
      }
    </ThemeProvider>
  )
}