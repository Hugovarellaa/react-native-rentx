import { useNavigation } from "@react-navigation/native";
import { StatusBar, useWindowDimensions } from 'react-native';
import DoneSvg from '../../assets/done.svg';
import LogoSvg from "../../assets/logo_background_gray.svg";
import { ButtonConfirm } from '../../Components/ButtonConfirm';
import { Content, Footer, SchedulingCompletedContainer, SubTitle, Title } from "./styles";


export function SchedulingCompleted() {
  const { width } = useWindowDimensions()

  const navigation = useNavigation()

  function handleNextPage() {
    navigation.navigate('Home')
  }
  return (
    <SchedulingCompletedContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle='light-content'
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado</Title>
        <SubTitle>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </SubTitle>
      </Content>

      <Footer>
        <ButtonConfirm title='OK' onPress={handleNextPage} />
      </Footer>
    </SchedulingCompletedContainer>
  )
}