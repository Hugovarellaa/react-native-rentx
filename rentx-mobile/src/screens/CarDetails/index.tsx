import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native"

import { Accessory } from "../../components/Accessory"
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button"
import { ImageSlider } from "../../components/ImageSlider"
import { CarDTO } from "../../dtos/CarDTO"
import { getAccessoryIcon } from "../../utils/getAccessoryIcon"

import {
  About,
  Accessories,
  Brand,
  CarDetailsContainer,
  CarImage,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent
} from "./styles"

interface Params {
  car: CarDTO
}

export function CarDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute()
  const { car } = route.params as Params

  function handleGoBack() {
    navigation.goBack()
  }

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {car})
  }

  return (
    <CarDetailsContainer>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImage>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>

        {/* Envolver os accessory por  um wrapper para quebra no dispositivo físico */}
        <Accessories>

          {
            car.accessories.map(accessory => (
              <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
            ))
          }
        </Accessories>

        <About>
        {
          car.about
        }
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </CarDetailsContainer>
  )
}
