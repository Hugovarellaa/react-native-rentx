import { BackButton } from "../../Components/BackButton";
import { ImageSlider } from "../../Components/ImageSlider";
import { CarDetailsContainer, Header } from "./styles";

export function CarDetails() {
  return (
    <CarDetailsContainer>
      <Header>
        <BackButton color="gray" />
      </Header>
      <ImageSlider
        imagesUrl={["https://www.pngarts.com/files/3/Lamborghini-Huracan-PNG-Download-Image.png"]}
      />
    </CarDetailsContainer>
  )
}