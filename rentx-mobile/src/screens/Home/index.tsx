import { StatusBar, Text } from "react-native"
import { Header, HomeContainer } from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <Header />
      <Text>Home</Text>
    </HomeContainer>
  )
}
