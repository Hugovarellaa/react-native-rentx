import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { CarList, Header, HeaderContent, HomeContainer, TotalCar } from "./styles"


import { useNavigation } from "@react-navigation/native"
import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car"

export function Home() {
  const navigation = useNavigation()
  const carOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120
    },
    thumbnail:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ff5a98a2-fd1e-4585-84a9-d91a5947d7d0/61f4cdfb-46ba-4ae9-8c08-3414e91094af.png"
  }

  function handleCarDetails (){
    navigation.navigate('CarDetails')
  }

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCar>Total de 12 Carros</TotalCar>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Car data={carOne} onPress={handleCarDetails}/>}
      />
    </HomeContainer>
  )
}
