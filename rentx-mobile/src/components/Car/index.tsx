import GasolineType from "../../assets/gasoline.svg"
import { About, Brand, CarContainer, CarImage, Details, Name, Period, Price, Rent, Type } from "./styles"

export function Car() {
  return (
    <CarContainer>
      <Details>
        <Brand>Audi </Brand>
        <Name>RS 5 Coupé</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>

          <Type>
            <GasolineType />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: "" }} />
    </CarContainer>
  )
}
