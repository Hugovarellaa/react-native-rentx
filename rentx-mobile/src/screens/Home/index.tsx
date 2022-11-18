import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car"
import { LoadingAnimation } from "../../components/LoadingAnimation"
import { CarDTO } from "../../dtos/CarDTO"
import { api } from "../../services/axios"
import { CarList, Header, HeaderContent, HomeContainer, TotalCar } from "./styles"


export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car })
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
          {
            !loading && (
              <TotalCar>Total de {cars.length} Carros</TotalCar>
            )
          }
        </HeaderContent>
      </Header>

      {
        loading
          ? <LoadingAnimation />
          : <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
      }


    </HomeContainer>
  )
}
