import { BackButton } from "../../Components/BackButton";
import { Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, SchedulingContainer, Title } from "./styles";

import { StatusBar } from "react-native";
import ArrowLeftSvg from '../../assets/arrow.svg';
import { Button } from "../../Components/Button";
import { Calendar } from "../../Components/Calendar";

export function Scheduling() {
  return (
    <SchedulingContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />
      <Header>
        <BackButton color="white" />
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
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirma" onPress={() => { }} />
      </Footer>
    </SchedulingContainer>
  )
}