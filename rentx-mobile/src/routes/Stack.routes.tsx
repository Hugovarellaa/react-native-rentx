import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CarDetails } from "../screens/CarDetails"
import { Home } from "../screens/Home"
import { MyCar } from "../screens/MyCar"
import { Scheduling } from "../screens/Scheduling"
import { SchedulingComplete } from "../screens/SchedulingComplete"
import { SchedulingDetails } from "../screens/SchedulingDetails"
import { SignIn } from "../screens/SignIn"
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep"
// import { Splash } from "../screens/Splash"


const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="MyCar" component={MyCar} />
    </Navigator>
  )
}
