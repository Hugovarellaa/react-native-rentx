import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components"
import accelerationSvg from "../../assets/acceleration.svg"
import exchangeSvg from "../../assets/exchange.svg"
import forceSvg from "../../assets/force.svg"
import gasolineSvg from "../../assets/gasoline.svg"
import peopleSvg from "../../assets/people.svg"
import speedSvg from "../../assets/speed.svg"
import { Accessory } from "../../components/Accessory"
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button"
import { ImageSlider } from "../../components/ImageSlider"

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

export function SchedulingDetails() {
  const theme = useTheme()
  return (
    <CarDetailsContainer>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImage>
        <ImageSlider
          imagesUrl={[
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/model_chooser/mobile/Huracan_Evo_cc-arancio_xanto-Aesir_20_Diamond_Cut-black_caliper-sceneplate_env.png"
          ]}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>Audi </Brand>
            <Name>RS 5 Coupé</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        {/* Envolver os accessory por  um wrapper para quebra no dispositivo físico */}
        <Accessories>
          <Accessory name="380km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasoline" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
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
            <DateValue>14/11/2022</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>14/11/2022</DateValue>
          </DateInfo>
        </RentPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success}/>
      </Footer>
    </CarDetailsContainer>
  )
}
