import { CarImage, CarImageWrapper, ImageIndex, ImageIndexes, ImageSliderContainer } from "./styles";

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <ImageSliderContainer>
      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{ uri: imagesUrl[0] }}
          resizeMode='contain'
        />
      </CarImageWrapper>
    </ImageSliderContainer>
  )
}