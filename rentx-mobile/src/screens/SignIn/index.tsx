import { StatusBar } from "react-native";
import { Header, SignInContainer, SubTitle, Title } from "./styles";

export function SignIn() {
  return (
    <SignInContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Header>
        <Title>Estamos {'\n'}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>
    </SignInContainer>
  )
}
