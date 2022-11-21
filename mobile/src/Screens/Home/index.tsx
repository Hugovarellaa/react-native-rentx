import { StatusBar } from "react-native";
import { Header, HomeContainer } from "./styles";



export function Home() {
  return (
    <HomeContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />
      <Header>

      </Header>
    </HomeContainer>
  )
}