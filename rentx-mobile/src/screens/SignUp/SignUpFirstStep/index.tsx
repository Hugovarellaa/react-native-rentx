import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Form, FormTitle, Header, SignUpFirstStepContainer, Steps, SubTitle, Title } from "./styles";


export function SignUpFirstStep() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.goBack()
  }

  return (
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
      </Form>

    </SignUpFirstStepContainer>
  )
}
