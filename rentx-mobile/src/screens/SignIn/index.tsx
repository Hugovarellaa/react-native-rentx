import { Header, SignInContainer, SubTitle, Title } from "./styles";

export function SignIn() {
  return (
    <SignInContainer>
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
