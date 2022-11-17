import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { IconContainer, InputContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({ iconName, ...rest }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  const theme = useTheme()

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(oldState => !oldState)
  }

  return (
    <InputContainer >

      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text_detail}

        />
      </IconContainer>

      <InputText {...rest} secureTextEntry={isPasswordVisible} />

      <IconContainer>
        <BorderlessButton onPress={handlePasswordVisibilityChange}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}

            size={24}
            color={theme.colors.text_detail}
          />
        </BorderlessButton>
      </IconContainer>

    </InputContainer >
  )
}
