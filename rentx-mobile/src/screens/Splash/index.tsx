import { Button, Dimensions, StatusBar, StyleSheet } from "react-native";
import { SplashContainer } from "./styles";

import Animated, {
  Easing, useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

const width = Dimensions.get('window').width

export function Splash() {
  const animation = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 3000,
            easing: Easing.bezier(.37,.86,.13,.01)
          })
        }
      ]
    }
  })

  function handleAnimationPosition(){
    animation.value = Math.random() * (width - 100)
  }

  return (
    <SplashContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Move" onPress={handleAnimationPosition} />

    </SplashContainer>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})
