import { StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/logo.svg';
import { Header, HeaderWrapper, HomeContainer, TotalCar } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />
      <Header>
        <HeaderWrapper>
          <LogoSvg width={RFValue(108)} height={RFValue(12)} />
          <TotalCar>Total de 12 Carros</TotalCar>
        </HeaderWrapper>
      </Header>
    </HomeContainer>
  )
}