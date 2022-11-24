import LottieView from 'lottie-react-native';
import { LoadingAnimationContainer } from "./styles";

// import loadingCar from '../../assets/loading-car.json';

export function LoadingAnimation() {
  return (
    <LoadingAnimationContainer>
      <LottieView
        autoPlay
        loop
        resizeMode='contain'
        source={require('../../assets/loading-car.json')}
        style={{
          width: 200,
          height: 200,
        }}

      />
    </LoadingAnimationContainer>
  )
}