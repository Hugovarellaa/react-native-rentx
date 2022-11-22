import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CarDetails } from '../Screens/CarDetails'
import { Home } from '../Screens/Home'
import { Scheduling } from '../Screens/Scheduling'
import { SchedulingCompleted } from '../Screens/SchedulingCompleted'
import { SchedulingDetails } from '../Screens/SchedulingDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{
      headerShown: false
    }}>
      <Screen name='Home' component={Home} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='SchedulingCompleted' component={SchedulingCompleted} />
    </Navigator>
  )
}