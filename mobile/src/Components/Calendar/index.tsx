import { Feather } from '@expo/vector-icons'
import { Calendar as CustomCalendar } from 'react-native-calendars'
import { useTheme } from 'styled-components'

export function Calendar() {
  const theme = useTheme()
  return (
    <CustomCalendar
      renderArrow={(direction) =>
        <Feather size={24} color={theme.colors.text} name={direction === 'left' ? 'chevron-left' : 'chevron-right'} />
      }
    />
  )
}