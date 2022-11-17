import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { IconContainer, InputContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  value?: string
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  const theme = useTheme()

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(oldState => !oldState)
  }

  return (
    <InputContainer >

      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={(isFilled || isFocused) ? theme.colors.main : theme.colors.text_detail}

        />
      </IconContainer>

      <InputText
      isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        {...rest}

      />

      <IconContainer  isFocused={isFocused}>
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
