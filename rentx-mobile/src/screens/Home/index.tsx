import { Ionicons } from "@expo/vector-icons"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components"
import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car"
import { Loading } from "../../components/Loading"
import { CarDTO } from "../../dtos/CarDTO"
import { api } from "../../services/axios"
import { CarList, Header, HeaderContent, HomeContainer, MyCarsButton, TotalCar } from "./styles"


export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme()

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails' , {car})
  }

  function handleMyCar (){
    navigation.navigate('MyCar')
  }

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchCar()
  }, [])

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCar>Total de 12 Carros</TotalCar>
        </HeaderContent>
      </Header>

      {
        loading
          ? <Loading />
          : <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
      }

      <MyCarsButton onPress={handleMyCar}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape}/>
      </MyCarsButton>
    </HomeContainer>
  )
}
