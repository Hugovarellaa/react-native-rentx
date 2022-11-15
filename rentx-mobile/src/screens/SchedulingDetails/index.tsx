import { Feather } from "@expo/vector-icons"
import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native"
import { format } from "date-fns"
import { useEffect, useState } from "react"

import { Alert, StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components"
import { Accessory } from "../../components/Accessory"
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button"
import { ImageSlider } from "../../components/ImageSlider"
import { CarDTO } from "../../dtos/CarDTO"
import { api } from "../../services/axios"
import { getAccessoryIcon } from "../../utils/getAccessoryIcon"
import { getPlatformDate } from "../../utils/getPlataformDate"

import {
  Accessories,
  Brand, CalendarIcon, CarDetailsContainer,
  CarImage,
  Content, DateInfo,
  DateTitle,
  DateValue, Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent, RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota,
  RentalPriceTotal, RentPeriod
} from "./styles"

interface Params {
  car: CarDTO
  dates: string[]
}

interface RentalPeriod {
  start: string
  end: string
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme()
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute()
  const { car, dates } = route.params as Params

  const rentTotal = Number(dates.length * car.rent.price)

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleConfirmRental() {
    // Desafio validação -> verificar disponibilidade de datas
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
      .then(() => navigation.navigate('SchedulingComplete'))
      .catch(() => Alert.alert('Não foi possível fazer o agendamento'))


  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), "dd/MM/yyyy"),
    })

  }, [dates])

  return (
    <CarDetailsContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

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
            <Name>RS {car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
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

        <RentPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>


          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x ${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental} />
      </Footer>
    </CarDetailsContainer>
  )
}
