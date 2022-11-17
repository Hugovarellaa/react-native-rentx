import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";
import * as yup from 'yup';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Footer, Form, Header, SignInContainer, SubTitle, Title } from "./styles";


export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme()

  async function handleSignIn() {
    try {
      const schema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório').email('Digite um email valido'),
        password: yup.string().required('A senha e obrigatória')
      })

      await schema.validate({ email, password })

      // Fazer login
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert('Opa', error.message)
      } else {
        Alert.alert(
          'Error na autenticação',
          'Ocorreu um error ao fazer o login, verifique as credenciais'
        )
      }
    }
  }

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
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              disabled={false}
              loading={false}
              onPress={handleSignIn}

            />
            <Button
              title="Criar conta gratuita"
              light
              onPress={() => { }}
              color={theme.colors.background_secondary}

            />
          </Footer>
        </SignInContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
