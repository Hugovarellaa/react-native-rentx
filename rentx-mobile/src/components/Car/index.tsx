import { TouchableOpacityProps } from 'react-native'
import GasolineType from "../../assets/gasoline.svg"
import { About, Brand, CarContainer, CarImage, Details, Name, Period, Price, Rent, Type } from "./styles"

import { CarDTO } from '../../dtos/CarDTO'


interface CarProps extends TouchableOpacityProps {
  data: CarDTO
}

export function Car({ data, ...rest }: CarProps) {
  return (
    <CarContainer {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineType />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail
        }}
        resizeMode="contain"
      />
    </CarContainer>
  )
}
