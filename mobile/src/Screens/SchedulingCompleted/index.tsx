import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar, useWindowDimensions } from 'react-native';
import { RootStackParamList } from "../../@types/navigation";
import DoneSvg from '../../assets/done.svg';
import LogoSvg from "../../assets/logo_background_gray.svg";
import { ButtonConfirm } from '../../Components/ButtonConfirm';
import { Content, Footer, SchedulingCompletedContainer, SubTitle, Title } from "./styles";


type SchedulingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SchedulingCompleted'
>;

export function SchedulingCompleted() {
  const { width } = useWindowDimensions()

  const { navigate } = useNavigation<SchedulingScreenNavigationProp>()

  function handleNextPage() {
    navigate('Home')
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