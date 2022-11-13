import { StatusBar, Text } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { Header, HeaderContent, HomeContainer, TotalCar } from "./styles"

import Logo from "../../assets/logo.svg"

export function Home() {
  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCar>Total de 12 Carros</TotalCar>
        </HeaderContent>
      </Header>
      <Text>Home</Text>
    </HomeContainer>
  )
}
