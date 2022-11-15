import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native"
import { format } from "date-fns"
import { useState } from "react"
import { Alert, StatusBar } from "react-native"
import { useTheme } from "styled-components"
import ArrowSVG from "../../assets/arrow.svg"
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button"
import { Calendar, DayProps, generateInterval, MarkedDatesProps } from "../../components/Calendar"
import { CarDTO } from "../../dtos/CarDTO"
import { getPlatformDate } from "../../utils/getPlataformDate"
import {
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  SchedulingContainer,
  Title
} from "./styles"


interface RentalPeriod {
  startFormatted: string
  endFormatted: string
}

interface Params {
  car: CarDTO
}



export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme()
  const route = useRoute()
  const { car } = route.params as Params

  function handleGoBack() {
    navigation.goBack()
  }

  function handleConfirmRental() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Selecione o intervalo para alugar.')
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates)
      })

    }
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDay = Object.keys(interval)[0]
    const endDay = Object.keys(interval)[Object.keys(interval).length - 1]
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDay)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDay)), 'dd/MM/yyyy'),
    })

  }


  return (
    <SchedulingContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Header>
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowSVG />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirma" onPress={handleConfirmRental} disabled={!rentalPeriod.startFormatted}/>
      </Footer>
    </SchedulingContainer>
  )
}
