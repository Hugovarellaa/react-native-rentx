import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CarDetails } from "../screens/CarDetails"
import { Confirmation } from "../screens/Confirmation"
import { Home } from "../screens/Home"
import { MyCar } from "../screens/MyCar"
import { Scheduling } from "../screens/Scheduling"
import { SchedulingDetails } from "../screens/SchedulingDetails"


const { Navigator, Screen } = createNativeStackNavigator()

export function AppStackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      {/* <Screen name="Splash" component={Splash} /> */}

      <Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCar" component={MyCar} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  )
}
