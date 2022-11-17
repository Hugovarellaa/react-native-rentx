import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Footer, Form, Header, SignInContainer, SubTitle, Title } from "./styles";

export function SignIn() {
  const theme = useTheme()

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

      <Form>
        <Input
          iconName="mail"
          placeholder="E-Mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize='none'
        />
        <Input iconName="mail" placeholder="Senha" />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() => { }}
        />
        <Button
          title="Criar conta gratuita"
          onPress={() => { }}
          light
          color={theme.colors.background_secondary}
        />
      </Footer>
    </SignInContainer>
  )
}
