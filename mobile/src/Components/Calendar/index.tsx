import { Feather } from '@expo/vector-icons';
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
  dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt-br';



export function Calendar() {
  const theme = useTheme()
  return (
    <CustomCalendar
      renderArrow={(direction) =>
        <Feather size={24} color={theme.colors.text} name={direction === 'left' ? 'chevron-left' : 'chevron-right'} />
      }
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_400,
        textDayHeaderFontSize: 10,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
    />
  )
} 