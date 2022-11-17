import { NavigationProp, ParamListBase, useNavigation, useRoute } from "@react-navigation/native";

import { StatusBar, useWindowDimensions } from "react-native";
import DoneSvg from "../../assets/done.svg";
import BrandSvg from "../../assets/logo_background_gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { ConfirmationContainer, Content, Footer, Message, Title } from "./styles";

interface Params {
  title: string;
  message?: string
  nextScreenRoute: string
}

export function Confirmation() {
  const { width } = useWindowDimensions()
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const route = useRoute()
  const { title, nextScreenRoute, message } = route.params as Params


  function handleConfirmRental() {
    navigation.navigate(nextScreenRoute)
  }

  return (
    <ConfirmationContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <BrandSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirmRental} />
      </Footer>
    </ConfirmationContainer>
  )
}
