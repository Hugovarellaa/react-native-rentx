import { StatusBar } from "react-native";
import { Header, HomeContainer } from "./styles";

import LogoSvg from '../../assets/logo.svg';

export function Home() {
  return (
    <HomeContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />
      <Header>
        <LogoSvg />
      </Header>
    </HomeContainer>
  )
}