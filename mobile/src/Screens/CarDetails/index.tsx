import { Accessory } from "../../Components/Accessory";
import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";
import { About, AccessoryWrapper, Brand, CarDetailsContainer, CarImages, Content, Description, Details, Footer, Header, Name, Period, Price, Rent } from "./styles";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../@types/navigation";
import { Button } from "../../Components/Button";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

type CarDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

type CarDetailsProps = NativeStackScreenProps<RootStackParamList, 'CarDetails'>;


export function CarDetails({ route }: CarDetailsProps) {
  const { goBack, navigate } = useNavigation<CarDetailsScreenNavigationProp>()

  const { car } = route.params

  function goBackPage() {
    goBack()
  }

  function handleNextPage() {
    navigate('Scheduling', {
      car
    })
  }

  return (
    <CarDetailsContainer>
      <Header>
        <BackButton color="gray" onPress={goBackPage} />
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