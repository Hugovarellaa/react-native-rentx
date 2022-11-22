import { useWindowDimensions } from 'react-native';
import DoneSvg from '../../assets/done.svg';
import LogoSvg from "../../assets/logo_background_gray.svg";
import { ButtonConfirm } from '../../Components/ButtonConfirm';
import { Content, Footer, SchedulingCompletedContainer, SubTitle, Title } from "./styles";


export function SchedulingCompleted() {
  const { width } = useWindowDimensions()
  return (
    <SchedulingCompletedContainer>
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
        <ButtonConfirm title='OK' onPress={() => { }} />
      </Footer>
    </SchedulingCompletedContainer>
  )
}