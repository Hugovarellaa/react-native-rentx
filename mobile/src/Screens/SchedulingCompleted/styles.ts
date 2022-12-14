import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const SchedulingCompletedContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};

  padding-top: 96px;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-bottom: 16px;

`

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};

  margin-top: 40px;
`

export const SubTitle = styled.Text`
  line-height: ${RFValue(25)}px;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;

  margin-top: 16px;
`

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  margin-top: 80px ;
  margin-bottom: 80px;
  
`