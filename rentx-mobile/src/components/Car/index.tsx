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

      <CarImage
        source={{
          uri: "https://www.webmotors.com.br/imagens/prod/348928/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PLATINUM_EDITION_PDK_34892815305718989.webp?s=fill&w=130&h=97&q=70&t=true)"
        }}
      />
    </CarContainer>
  )
}
