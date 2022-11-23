import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Accessory } from "../../Components/Accessory";
import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";
import {
  AccessoryWrapper,
  Brand, CalendarIcon, CarDetailsContainer,
  CarImages,
  Content, DateInfo,
  DateTitle, DateValue, Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota,
  RentalPriceTotal
} from "./styles";

import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { RootStackParamList } from "../../@types/navigation";

import { Button } from "../../Components/Button";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";


type SchedulingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SchedulingDetails'
>;

type SchedulingDetailsProps = NativeStackScreenProps<RootStackParamList, 'SchedulingDetails'>;


export function SchedulingDetails({ route }: SchedulingDetailsProps) {
  const theme = useTheme()

  const { goBack, navigate } = useNavigation<SchedulingScreenNavigationProp>()
  const { car, dates } = route.params


  function goBackPage() {
    goBack()
  }

  function handleNextPage() {
    navigate('SchedulingCompleted')
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>22/11/2022</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>22/11/2022</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x 3</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button title="Alugar agora" color="green" onPress={handleNextPage} />
      </Footer>

    </CarDetailsContainer>
  )
}