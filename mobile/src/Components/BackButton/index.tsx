import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { BackButtonContainer } from "./styles";


interface Props extends TouchableOpacityProps {
  color?: 'gray' | 'white'
}

export function BackButton({ color = 'white', ...rest }: Props) {
  return (
    <BackButtonContainer {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color}
      />
    </BackButtonContainer>
  )
}