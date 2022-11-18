import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import * as yup from 'yup';
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Form, FormTitle, Header, SignUpFirstStepContainer, Steps, SubTitle, Title } from "./styles";



export function SignUpFirstStep() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [driverLicense, setDriverLicense] = useState('')


  const navigation = useNavigation<NavigationProp<ParamListBase>>();


  function handleGoBack() {
    navigation.goBack()
  }

  async function handleNextPage() {
    try {
      const schema = yup.object().shape({
        driverLicense: yup.string().required('CNH é obrigatório'),
        email: yup.string().required('E-mail é obrigatório').email('E-mail invalido'),
        name: yup.string().required('Nome é obrigatório'),
      })

      const data = { name, email, driverLicense }
      await schema.validate(data)

      navigation.navigate('SignUpSecondStep', { user: data })
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert('Opa', error.message)
      }
      console.log(error)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SignUpFirstStepContainer>
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
            <FormTitle>1. Dados</FormTitle>

            <Input
              iconName="user"
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Form>

          <Button title="Proximo" onPress={handleNextPage} />

        </SignUpFirstStepContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )
}
