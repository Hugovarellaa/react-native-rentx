import { Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Footer, Form, Header, SignInContainer, SubTitle, Title } from "./styles";

export function SignIn() {
  const theme = useTheme()

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
            />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}