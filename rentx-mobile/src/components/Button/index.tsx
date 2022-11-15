import { TouchableOpacityProps } from "react-native"
import { useTheme } from 'styled-components'
import { ButtonContainer, Title } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  title: string
  color?: string
  onPress?: () => void
  disabled?: boolean
}

export function Button({ title, color ,onPress, disabled = false, ...rest }: ButtonProps) {
  const theme = useTheme()

  return (
    <ButtonContainer {...rest} color={color ? color: theme.colors.main} onPress={onPress} disabled={disabled} style={{ opacity: disabled ? 0.5 : 1}}>
      <Title>{title}</Title>
    </ButtonContainer>
  )
}
