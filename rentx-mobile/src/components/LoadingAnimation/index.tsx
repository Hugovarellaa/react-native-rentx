import LottieView from 'lottie-react-native';
import LoadingCar from '../../assets/loading-animation.json';
import { LoadingAnimationContainer } from "./styles";

export function LoadingAnimation() {
  return (
    <LoadingAnimationContainer>
      <LottieView
        source={LoadingCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode='contain'
        loop
      />
    </LoadingAnimationContainer>
  )
}
