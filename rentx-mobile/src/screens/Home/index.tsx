import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { Header, HeaderContent, HomeContainer, TotalCar } from "./styles"

//

import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car"

export function Home() {
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
  const carTwo = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: "AO DIA",
      price: 340
    },
    thumbnail: "https://i.pinimg.com/originals/e3/99/6c/e3996cbc32b254dd28205dd7e36a6a11.png"
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

      <Car data={carOne} />
      <Car data={carTwo} />
    </HomeContainer>
  )
}
