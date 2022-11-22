import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
  color: 'green' | 'red'
}

export const ButtonContainer = styled(TouchableOpacity) <ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) => color === 'red' ? theme.colors.main : theme.colors.success};

`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.white};
`