import { Feather } from "@expo/vector-icons";
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

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import AccelerationSvg from "../../assets/acceleration.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import PeopleSvg from "../../assets/people.svg";
import SpeedSvg from "../../assets/speed.svg";
import { Button } from "../../Components/Button";


export function SchedulingDetails() {
  const theme = useTheme()

  return (
    <CarDetailsContainer>
      <Header>
        <BackButton color="gray" />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={["https://www.pngarts.com/files/3/Lamborghini-Huracan-PNG-Download-Image.png"]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <AccessoryWrapper>
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={ExchangeSvg} />
          <Accessory name="Auto" icon={GasolineSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
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
        <Button title="Alugar agora" color="green" onPress={() => { }} />
      </Footer>

    </CarDetailsContainer>
  )
}