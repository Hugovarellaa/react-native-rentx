import { Dimensions, ScrollView } from "react-native"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface ImageIndexProps {
  active?: boolean
}

export const ImageSliderContainer = styled.View`
  width: 100%;
`

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-left: 8px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;
  justify-content: center;
  align-items: center;
`

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px;
`

export const Description = styled.View``

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`

export const Rent = styled.View``

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`
