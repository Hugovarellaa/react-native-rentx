import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../@types/navigation'
import { CarDetails } from '../Screens/CarDetails'
import { Home } from '../Screens/Home'
import { MyCars } from '../Screens/MyCars'
import { Scheduling } from '../Screens/Scheduling'
import { SchedulingCompleted } from '../Screens/SchedulingCompleted'
import { SchedulingDetails } from '../Screens/SchedulingDetails'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

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
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  )
}