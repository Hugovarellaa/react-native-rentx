import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from "../screens/Home"
import { MyCar } from "../screens/MyCar"

import { AppStackRoutes } from "./app.stack.routes"

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
  return (
    <Navigator >
      <Screen name="Home" component={AppStackRoutes} options={{ headerShown: false }} />
      <Screen name="Profile" component={Home} options={{ headerShown: false }} />
      <Screen name="MyCar" component={MyCar} options={{ headerShown: false }} />
    </Navigator>
  )
}
