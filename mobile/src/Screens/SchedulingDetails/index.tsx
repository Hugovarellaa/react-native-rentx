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
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { RootStackParamList } from "../../@types/navigation";
import { Button } from "../../Components/Button";
import { api } from "../../services/axios/api";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { getPlatformDate } from "../../utils/getPlataformDate";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

type SchedulingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SchedulingDetails'
>;

type SchedulingDetailsProps = NativeStackScreenProps<RootStackParamList, 'SchedulingDetails'>;


export function SchedulingDetails({ route }: SchedulingDetailsProps) {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const [loading, setLoading] = useState(false)
  const theme = useTheme()

  const { goBack, navigate } = useNavigation<SchedulingScreenNavigationProp>()
  const { car, dates } = route.params
  const rentalTotal = Number(dates.length * car.rent.price)

  function goBackPage() {
    goBack()
  }

  async function handleConfirmRent() {
    setLoading(true)

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]

    await api.post('/schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
      .then(() => navigate('SchedulingCompleted'))
      .catch(() => {
        setLoading(false)
        Alert.alert('N??o foi poss??vel realizar o agendamento')
      })
  }


  useEffect(() => {
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

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
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x ${dates.length}`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button title="Alugar agora" color="green" onPress={handleConfirmRent} loading={loading} disabled={loading} />
      </Footer>

    </CarDetailsContainer>
  )
}