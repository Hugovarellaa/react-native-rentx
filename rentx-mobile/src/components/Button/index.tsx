import { TouchableOpacityProps } from "react-native"
import { useTheme } from 'styled-components'
import { ButtonContainer, Title } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  title: string
  color?: string
  onPress?: () => void
}

export function Button({ title, color ,onPress, ...rest }: ButtonProps) {
  const theme = useTheme()

  return (
    <ButtonContainer {...rest} color={color ? color: theme.colors.main} onPress={onPress}>
      <Title>{title}</Title>
    </ButtonContainer>
  )
}
