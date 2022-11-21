import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";
import { About, Brand, CarDetailsContainer, CarImages, Content, Description, Details, Header, Name, Period, Price, Rent } from "./styles";

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

        <About>
        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

    </CarDetailsContainer>
  )
}