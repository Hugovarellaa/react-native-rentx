import { About, Brand, CarContainer, CarImage, Details, Name, Period, Price, Rent, Type } from "./styles";

import GasolineSVG from "../../assets/gasoline.svg";

interface CarData {
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
  thumbnail: string
}

interface CarProps {
  data: CarData
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
            <Price>
              {`R$ ${data.rent.price}`}
            </Price>
          </Rent>

          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </CarContainer>
  )
}
