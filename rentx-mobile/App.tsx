import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from "@expo-google-fonts/archivo"
import { Inter_400Regular, Inter_500Medium, useFonts } from "@expo-google-fonts/inter"
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ThemeProvider } from "styled-components"
import { Loading } from "./src/components/Loading"
import { Routes } from "./src/routes"
import theme from "./src/styles/theme"


export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        {
          fontsLoading ? <Routes /> : <Loading />
        }
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
