import { About, Brand, CarContainer, CarImage, Details, Name, Period, Price, Rent, Type } from "./styles";

import GasolineSvg from "../../assets/gasoline.svg";

interface Car {
  brand: string
  name: string;
  rent: {
    period: string
    price: number
  }
  thumbnail: string
}

interface CarProps {
  data: Car
}

export function Car({ data }: CarProps) {
  return (
    <CarContainer>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>R$ {data.rent.price}</Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>
        </About>

      </Details>
      <CarImage source={{ uri: data.thumbnail }} resizeMode='contain' />
    </CarContainer>
  )
}