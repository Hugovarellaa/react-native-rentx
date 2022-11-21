import { BackButton } from "../../Components/BackButton";
import { CarDetailsContainer, Header } from "./styles";

export function CarDetails() {
  return (
    <CarDetailsContainer>
      <Header>
        <BackButton color="gray" />
      </Header>
    </CarDetailsContainer>
  )
}