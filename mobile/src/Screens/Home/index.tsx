import { StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/logo.svg';
import { Car } from "../../Components/Car/inde";
import { Header, HeaderWrapper, HomeContainer, TotalCar } from "./styles";

// ''

export function Home() {
  const carOne = {
    brand: 'Lamborghini',
    name: 'Huracan',
    rent: {
      period: 'Ao dia',
      price: 580
    },
    thumbnail: 'https://www.pngarts.com/files/3/Lamborghini-Huracan-PNG-Download-Image.png'
  }

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

      <Car data={carOne} />
      <Car data={carOne} />
      <Car data={carOne} />
      <Car data={carOne} />
    </HomeContainer>
  )
}