import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { InputContainer } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({ iconName }: InputProps) {
  const theme = useTheme()
  return (
    <InputContainer>
      <Feather name={iconName} size={24} color={theme.colors.text_detail} />
    </InputContainer>
  )
}
