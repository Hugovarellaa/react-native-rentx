import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"
import {
  About, Brand,
  CarDetailsContainer,
  CarImage,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent
} from "./styles"

interface CarDetailsProps {}

export function CarDetails({}: CarDetailsProps) {
  return (
    <CarDetailsContainer>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImage>
        <ImageSlider
          imagesUrl={[
            "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ff5a98a2-fd1e-4585-84a9-d91a5947d7d0/61f4cdfb-46ba-4ae9-8c08-3414e91094af.png"
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É
          um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
    </CarDetailsContainer>
  )
}
