import { useNavigation } from "@react-navigation/native";
import { Accessory } from "../../Components/Accessory";
import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";
import { About, AccessoryWrapper, Brand, CarDetailsContainer, CarImages, Content, Description, Details, Footer, Header, Name, Period, Price, Rent } from "./styles";

import { useRoute } from '@react-navigation/native';
import { Button } from "../../Components/Button";
import { CarDto } from "../../dtos/CarDto";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

type ParamList = {
  car: CarDto
};


export function CarDetails() {
  const navigation = useNavigation()

  const routes = useRoute()
  const { car } = routes.params as ParamList


  function goBack() {
    navigation.goBack()
  }

  function handleNextPage() {
    navigation.navigate('Scheduling')
  }

  return (
    <CarDetailsContainer>
      <Header>
        <BackButton color="gray" onPress={goBack} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImages>

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

        <AccessoryWrapper>
          {
            car.accessories.map(accessory => (
              <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
            ))
          }
        </AccessoryWrapper>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleNextPage} />
      </Footer>

    </CarDetailsContainer>
  )
}