import { BackButton } from "../../components/BackButton"
import { CarDetailsContainer, Header } from "./styles"

interface CarDetailsProps {}

export function CarDetails({}: CarDetailsProps) {
  return (
    <CarDetailsContainer>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
    </CarDetailsContainer>
  )
}
