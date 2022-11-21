import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.secondary_400};
  
;
`