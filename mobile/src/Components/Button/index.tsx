import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";


interface ButtonProps extends TouchableOpacityProps{
  title: string;
  color?: 'green' | 'red';
  onPress: ()=> void
}

export function Button ({title, color = 'red', onPress, ...rest}:ButtonProps){
  return (
    <ButtonContainer {...rest} color={color}>
      <Title>{title}</Title>
    </ButtonContainer> 
  )
}