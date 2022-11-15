import { StatusBar } from "react-native"
import { useTheme } from "styled-components"
import { BackButton } from "../../components/BackButton"
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

import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"

import { useState } from "react"
import ArrowSVG from "../../assets/arrow.svg"
import { Button } from "../../components/Button"
import { Calendar, DayProps, generateInterval, MarkedDatesProps } from "../../components/Calendar"

export function Scheduling() {
  const [lastSelectedDate , setLastSelectedDate] = useState<DayProps>({} as DayProps )
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme()


  function handleBackHome (){
    navigation.navigate('CarDetails')
  }

  function handleConfirmRental (){
    navigation.navigate('SchedulingDetails')
  }

  function handleChangeDate (date: DayProps){
    let start  = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if(start.timestamp > end.timestamp){
      start = end
      end = start
    }

    setLastSelectedDate(end)
     const interval = generateInterval(start , end)
     setMarkedDates(interval)
  }


  return (
    <SchedulingContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Header>
        <BackButton onPress={handleBackHome} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2022</DateValue>
          </DateInfo>

          <ArrowSVG />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate}/>
      </Content>

      <Footer>
        <Button title="Confirma" onPress={handleConfirmRental}/>
      </Footer>
    </SchedulingContainer>
  )
}
