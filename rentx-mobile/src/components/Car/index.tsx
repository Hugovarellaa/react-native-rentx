import { TouchableOpacityProps } from 'react-native'
import { About, Brand, CarContainer, CarImage, Details, Name, Period, Price, Rent, Type } from "./styles"

import { CarDTO } from '../../dtos/CarDTO'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'


interface CarProps extends TouchableOpacityProps {
  data: CarDTO
}

export function Car({ data, ...rest }: CarProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type)


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
            <MotorIcon />
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
