import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { RootStackParamList } from "../../@types/navigation";
import LogoSvg from '../../assets/logo.svg';
import { Car } from "../../Components/Car/inde";
import { Loading } from "../../Components/Loading";
import { CarDto } from "../../dtos/CarDto";
import { api } from "../../services/axios/api";
import { CarList, Header, HeaderWrapper, HomeContainer, MyCarButton, TotalCar } from "./styles";

import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function Home() {
  const [cars, setCars] = useState<CarDto[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme()

  function handleNextPage(car: CarDto) {
    navigation.navigate('CarDetails', { car })
  }

  function handleOpenMyCarPage() {
    navigation.navigate('MyCars')

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
              renderItem={({ item }) => <Car data={item} onPress={() => handleNextPage(item)} />}
            />
          )
      }

      <MyCarButton onPress={handleOpenMyCarPage}>
        <Ionicons
          name='ios-car-sport'
          size={32}
          color={theme.colors.shape}
        />

      </MyCarButton>

    </HomeContainer>
  )
}