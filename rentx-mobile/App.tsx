import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from "@expo-google-fonts/archivo"
import { Inter_400Regular, Inter_500Medium, useFonts } from "@expo-google-fonts/inter"
import { ThemeProvider } from "styled-components"
import { Loading } from "./src/components/Loading"
import { CarDetails } from "./src/screens/CarDetails"
import theme from "./src/styles/theme"

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })
  return <ThemeProvider theme={theme}>{fontsLoading ? <CarDetails /> : <Loading />}</ThemeProvider>
}
