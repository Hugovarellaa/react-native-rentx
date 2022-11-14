import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

import { StatusBar, useWindowDimensions } from "react-native";
import DoneSvg from "../../assets/done.svg";
import BrandSvg from "../../assets/logo_background_gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { Content, Footer, Message, SchedulingCompleteContainer, Title } from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions()
  const navigation = useNavigation<NavigationProp<ParamListBase>>();


  function handleConfirmRental (){
    navigation.navigate('Home')
  }


  return (
    <SchedulingCompleteContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <BrandSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.</Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirmRental}/>
      </Footer>
    </SchedulingCompleteContainer>
  )
}
