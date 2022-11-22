import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/logo.svg';
import { Car } from "../../Components/Car/inde";
import { CarList, Header, HeaderWrapper, HomeContainer, TotalCar } from "./styles";

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

  const navigation = useNavigation()

  function handleNextPage() {
    navigation.navigate('CarDetails')
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

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carOne} onPress={handleNextPage} />}
      />
    </HomeContainer>
  )
}