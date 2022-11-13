import { ActivityIndicator } from "react-native"
import theme from "../../styles/theme"
import { LoadingContainer } from "./styles"

export function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator color={theme.colors.success} />
    </LoadingContainer>
  )
}
