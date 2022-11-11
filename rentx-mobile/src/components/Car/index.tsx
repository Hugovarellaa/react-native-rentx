import { About, Brand, CarContainer, CarImage, Details, Name, Period, Price, Rent, Type } from "./styles";

import GasolineSVG from "../../assets/gasoline.svg";

export function Car() {
  return (
    <CarContainer>
      <Details>
        <Brand>AUDI</Brand>
        <Name>RS 5 Coupé</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>

          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: '' }} />
    </CarContainer>
  )
}
