import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../Components/BackButton";
import { Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, SchedulingContainer, Title } from "./styles";

import { useState } from "react";
import { StatusBar } from "react-native";
import ArrowLeftSvg from '../../assets/arrow.svg';
import { Button } from "../../Components/Button";
import { Calendar, DayProps, MarkeDateProps } from "../../Components/Calendar";
import { generateInterval } from "../../Components/Calendar/generateInterval";

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkeDateProps>({} as MarkeDateProps)
  const navigation = useNavigation()

  function goBack() {
    navigation.goBack()
  }

  function handleNextPage() {
    navigation.navigate('SchedulingDetails')
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
    console.log(interval)
    setMarkedDates(interval)
  }

  return (
    <SchedulingContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />
      <Header>
        <BackButton color="white" onPress={goBack} />
        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>22/10/2022</DateValue>
          </DateInfo>

          <ArrowLeftSvg />

          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateValue selected>22/10/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirma" onPress={handleNextPage} />
      </Footer>
    </SchedulingContainer>
  )
}