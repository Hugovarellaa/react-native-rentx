import { TouchableOpacityProps } from "react-native"
import { ButtonContainer, Title } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  title: string
  color?: string
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} color={color}>
      <Title>{title}</Title>
    </ButtonContainer>
  )
}
