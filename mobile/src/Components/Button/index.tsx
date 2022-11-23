import { TouchableOpacityProps } from "react-native";
import { Loading } from "../Loading";
import { ButtonContainer, Title } from "./styles";


interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: 'green' | 'red';
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ title, color = 'red', onPress, disabled = false, loading = false, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} color={color} onPress={onPress} disabled={disabled} style={{ opacity: (disabled || loading) ? 0.5 : 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <Title>{title}</Title>
      )}
    </ButtonContainer>
  )
}