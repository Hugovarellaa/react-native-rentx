import { TouchableOpacityProps } from "react-native";
import { ButtonConfirmContainer, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string
}

export function ButtonConfirm({ title, ...rest }: Props) {
  return (
    <ButtonConfirmContainer {...rest}>
      <Title>{title}</Title>
    </ButtonConfirmContainer>
  )
}