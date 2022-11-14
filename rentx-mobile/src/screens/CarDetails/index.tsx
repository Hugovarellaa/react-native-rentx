import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"

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
  About,
  Accessories,
  Brand,
  CarDetailsContainer,
  CarImage,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent
} from "./styles"

export function CarDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();


  function handleBackHome() {
    navigation.navigate('Home')
  }

  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  return (
    <CarDetailsContainer>
      <Header>
        <BackButton onPress={handleBackHome} />
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É
          um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </CarDetailsContainer>
  )
}
