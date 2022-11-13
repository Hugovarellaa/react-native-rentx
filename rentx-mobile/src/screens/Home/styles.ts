import styled from "styled-components/native"

export const HomeContainer = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  height: 113px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
`
