import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";
import { Form, FormTitle, Header, SignUpSecondStepContainer, Steps, SubTitle, Title } from "./styles";


export function SignUpSecondStep() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme()
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SignUpSecondStepContainer>
          <Header>
            <BackButton onPress={handleGoBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'}
            conta
          </Title>
          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil.
          </SubTitle>

          <Form>
            <FormTitle>02. Senha</FormTitle>
            <PasswordInput iconName="lock" placeholder="Senha" />
            <PasswordInput iconName="lock" placeholder="Repetir senha" />
          </Form>

          <Button title="Cadastrar" onPress={() => { }} color={theme.colors.success} />

        </SignUpSecondStepContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )
}
