import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { Header, HeaderContent, HomeContainer, TotalCar } from "./styles"

//

import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car"

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120
    },
    thumbnail:
      "https://www.webmotors.com.br/imagens/prod/348928/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PLATINUM_EDITION_PDK_34892815305718989.webp?s=fill&w=130&h=97&q=70&t=true"
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

      <Car data={carData} />
    </HomeContainer>
  )
}
