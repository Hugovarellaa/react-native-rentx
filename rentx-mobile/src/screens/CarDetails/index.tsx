import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"
import { CarDetailsContainer, CarImage, Header } from "./styles"

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
    </CarDetailsContainer>
  )
}
