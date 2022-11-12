import { CarImage, CarImages, CarImageWrapper, ImageIndex, ImageIndexes, ImageSliderContainer } from './styles'

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

    </ImageSliderContainer>
  )
}
