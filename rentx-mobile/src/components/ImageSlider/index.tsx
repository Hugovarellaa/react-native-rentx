import {
  About, Brand, CarImage,
  CarImages,
  CarImageWrapper, Content, Description, Details, ImageIndex,
  ImageIndexes,
  ImageSliderContainer, Name, Period,
  Price, Rent
} from './styles'

interface Props {
  imagesUrl: string[]
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <ImageSliderContainer>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>


      <CarImages>
        <CarImageWrapper>
          <CarImage
            source={{ uri: imagesUrl[0] }}
            resizeMode='contain'
          />
        </CarImageWrapper>
      </CarImages>


      <Content>
        <Details>

          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>

      </Content>



    </ImageSliderContainer >
  )
}
