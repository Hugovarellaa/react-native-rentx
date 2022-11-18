import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from "../screens/Home"
import { MyCar } from "../screens/MyCar"


const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
  return (
    <Navigator >
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Home} />
      <Screen name="MyCar" component={MyCar} />
    </Navigator>
  )
}
