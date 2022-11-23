import { FlatList } from "react-native";
import { CarImage, CarImageWrapper, ImageIndex, ImageIndexes, ImageSliderContainer } from "./styles";

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <ImageSliderContainer>
      <ImageIndexes>
        {
          imagesUrl.map((_, index) => (
            <ImageIndex key={String(index)} active={true} />
          ))
        }
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={key => key}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode='contain' />
          </CarImageWrapper>
        )}
      />

    </ImageSliderContainer>
  )
}