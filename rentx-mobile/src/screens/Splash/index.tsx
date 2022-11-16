import { StatusBar } from "react-native";
import { SplashContainer } from "./styles";

export function Splash (){
  return (
    <SplashContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />


    </SplashContainer>
  )
}
