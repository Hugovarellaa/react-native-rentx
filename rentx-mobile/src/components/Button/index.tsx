import { ActivityIndicator } from "react-native"
import { RectButtonProps } from "react-native-gesture-handler"
import { useTheme } from 'styled-components'
import { ButtonContainer, Title } from "./styles"

interface ButtonProps extends RectButtonProps {
  title: string
  color?: string
  loading?: boolean
  light?: boolean
}

export function Button({
  title,
  color,
  onPress,
  enabled = false,
  loading = false,
  light = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme()

  return (
    <ButtonContainer
      color={color ? color : theme.colors.main}
      onPress={onPress} enabled={enabled}
      style={{ opacity: (enabled === true || loading === true) ? 0.5 : 1 }}
      {...rest}
    >
      {
        loading
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Title light={light}>{title}</Title>

      }
    </ButtonContainer>
  )
}
