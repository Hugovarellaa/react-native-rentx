import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from '../../assets/logo.svg';
import { Container, Header, HeaderContent, TotalCar } from './styles';

export function Home() {
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCar>
            Total de 12 Carros
          </TotalCar>
        </HeaderContent>
      </Header>
    </Container >
  );
}
