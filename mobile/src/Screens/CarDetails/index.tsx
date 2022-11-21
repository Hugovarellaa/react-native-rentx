import { Accessory } from "../../Components/Accessory";
import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";
import { About, AccessoryWrapper, Brand, CarDetailsContainer, CarImages, Content, Description, Details, Header, Name, Period, Price, Rent } from "./styles";

import AccelerationSvg from "../../assets/acceleration.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import PeopleSvg from "../../assets/people.svg";
import SpeedSvg from "../../assets/speed.svg";


export function CarDetails() {
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
          <Accessory name="380km/h" icon={SpeedSvg}/>
          <Accessory name="3.2s" icon={AccelerationSvg}/>
          <Accessory name="800 HP" icon={ForceSvg}/>
          <Accessory name="Gasolina" icon={ExchangeSvg}/>
          <Accessory name="Auto" icon={GasolineSvg}/>
          <Accessory name="2 pessoas" icon={PeopleSvg}/>
        </AccessoryWrapper>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

    </CarDetailsContainer>
  )
}