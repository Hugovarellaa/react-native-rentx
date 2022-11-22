import { useWindowDimensions } from 'react-native';
import DoneSvg from '../../assets/done.svg';
import LogoSvg from "../../assets/logo_background_gray.svg";
import { Content, SchedulingCompletedContainer, SubTitle, Title } from "./styles";


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
    </SchedulingCompletedContainer>
  )
}