import { MaterialIcons } from "@expo/vector-icons";
import { BackButtonContainer } from "./styles";

interface Props {
  color?: 'gray' | 'white'
}

export function CarDetails({ color = 'white' }: Props) {
  return (
    <BackButtonContainer>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color}
      />
    </BackButtonContainer>
  )
}