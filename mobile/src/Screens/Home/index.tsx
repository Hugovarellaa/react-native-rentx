import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/logo.svg';
import { Car } from "../../Components/Car/inde";
import { Loading } from "../../Components/Loading";
import { CarDto } from "../../dtos/CarDto";
import { api } from "../../services/axios/api";
import { CarList, Header, HeaderWrapper, HomeContainer, TotalCar } from "./styles";

export function Home() {
  const [cars, setCars] = useState<CarDto[]>([])
  const [loading, setLoading] = useState(true)

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

  async function fetchCar() {
    try {
      const response = await api.get('/cars')
      setCars(response.data)
    } catch (error) {
      Alert.alert("Opa", "Não foi possível mostra os Carros")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCar()
  }, [])
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

      {
        loading
          ? <Loading />
          : (
            <CarList
              data={cars}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <Car data={item} onPress={handleNextPage} />}
            />
          )
      }

    </HomeContainer>
  )
}