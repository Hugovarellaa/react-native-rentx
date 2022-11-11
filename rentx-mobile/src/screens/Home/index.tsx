import { StatusBar } from "react-native";
import Logo from '../../assets/logo.svg';
import { Container, Header } from './styles';

export function Home() {
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Header>
        <Logo />
      </Header>
    </Container>
  );
}
