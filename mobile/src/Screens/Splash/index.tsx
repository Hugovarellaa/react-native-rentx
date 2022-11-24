import { StatusBar } from "react-native";
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { SplashContainer } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { RootStackParamList } from "../../@types/navigation";
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';


type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;


export function Splash() {

  const { navigate } = useNavigation<SplashScreenNavigationProp>()


  const splashAnimation = useSharedValue(0)

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 50],
        [1, 0],
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        }
      ],
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 25, 50],
        [0, .3, 1],
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          ),
        }
      ],
    }
  })

  function startApp() {
    navigate('Home')
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50, { duration: 1000 }, () => {
        'worklet'
        runOnJS(startApp)()
      }
    )

  }, [])

  return (
    <SplashContainer>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle="light-content"
      />

      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>

    </SplashContainer>
  )
}