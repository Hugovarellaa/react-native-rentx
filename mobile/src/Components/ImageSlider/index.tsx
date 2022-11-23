import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { CarImage, CarImageWrapper, ImageIndex, ImageIndexes, ImageSliderContainer } from "./styles";

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!
    setImageIndex(index)
  })

  return (
    <ImageSliderContainer>
      <ImageIndexes>
        {
          imagesUrl.map((_, index) => (
            <ImageIndex key={String(index)} active={index === imageIndex} />
          ))
        }
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={key => key}
        showsHorizontalScrollIndicator={false}
        horizontal
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode='contain' />
          </CarImageWrapper>
        )}
      />

    </ImageSliderContainer>
  )
}