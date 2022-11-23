import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { format } from 'date-fns';
import { useState } from "react";
import { StatusBar } from "react-native";
import { RootStackParamList } from "../../@types/navigation";
import ArrowLeftSvg from '../../assets/arrow.svg';
import { BackButton } from "../../Components/BackButton";
import { Button } from "../../Components/Button";
import { Calendar, DayProps, MarkeDateProps } from "../../Components/Calendar";
import { generateInterval } from "../../Components/Calendar/generateInterval";
import { getPlatformDate } from "../../utils/getPlataformDate";
import { Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, SchedulingContainer, Title } from "./styles";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

type SchedulingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Scheduling'
>;

type SchedulingProps = NativeStackScreenProps<RootStackParamList, 'CarDetails'>;


export function Scheduling({ route }: SchedulingProps) {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkeDateProps>({} as MarkeDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const { goBack, navigate } = useNavigation<SchedulingScreenNavigationProp>()
  const { car } = route.params

  function goBackPage() {
    goBack()
  }

  function handleNextPage() {
    navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    })
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

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })
  }

  return (
    <SchedulingContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />
      <Header>
        <BackButton color="white" onPress={goBackPage} />
        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowLeftSvg />

          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirma" onPress={handleNextPage} disabled={!rentalPeriod.startFormatted} />
      </Footer>
    </SchedulingContainer>
  )
}