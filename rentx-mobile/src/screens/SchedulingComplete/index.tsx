import { useWindowDimensions } from "react-native";
import DoneSvg from "../../assets/done.svg";
import BrandSvg from "../../assets/logo_background_gray.svg";
import { Content, Message, SchedulingCompleteContainer, Title } from "./styles";


export function SchedulingComplete() {
  const { width } = useWindowDimensions()
  return (
    <SchedulingCompleteContainer>
      <BrandSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.</Message>
      </Content>
    </SchedulingCompleteContainer>
  )
}
