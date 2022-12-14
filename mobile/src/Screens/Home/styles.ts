import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { CarDto } from "../../dtos/CarDto";


export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};

`
export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;

  padding: 32px 24px;

`
export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`

export const TotalCar = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`
export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDto>) => FlatList<CarDto>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 24,
  }
})`

`
