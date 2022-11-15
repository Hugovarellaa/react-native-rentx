import { ActivityIndicator, TouchableOpacityProps } from "react-native"
import { useTheme } from 'styled-components'
import { ButtonContainer, Title } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  title: string
  color?: string
  onPress?: () => void
  disabled?: boolean
  loading?: boolean
}

export function Button({ title, color, onPress, disabled = false, loading = false, ...rest }: ButtonProps) {
  const theme = useTheme()

  return (
    <ButtonContainer
      color={color ? color : theme.colors.main}
      onPress={onPress} disabled={disabled}
      style={{ opacity: (disabled === true || loading === true) ? 0.5 : 1 }}
      {...rest}
    >
      {
        loading
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Title>{title}</Title>

      }
    </ButtonContainer>
  )
}
