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

import ArrowSVG from "../../assets/arrow.svg"
import { Button } from "../../components/Button"
import { Calendar } from "../../components/Calendar"

export function Scheduling() {
  const theme = useTheme()
  return (
    <SchedulingContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

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
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirma" />
      </Footer>
    </SchedulingContainer>
  )
}
