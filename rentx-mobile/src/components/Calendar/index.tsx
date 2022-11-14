import { Feather } from "@expo/vector-icons"
import { Calendar as CustomCalendar } from "react-native-calendars"
import { useTheme } from "styled-components"

export function Calendar() {
  const theme = useTheme()
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather size={24} color={theme.colors.text} name={direction === "left" ? "chevron-left" : "chevron-right"} />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
    />
  )
}
