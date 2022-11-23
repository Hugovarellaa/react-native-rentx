import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { RootStackParamList } from "../../@types/navigation";
import { BackButton } from "../../Components/BackButton";
import { Car } from "../../Components/Car/inde";
import { Loading } from '../../Components/Loading';
import { CarDto } from "../../dtos/CarDto";
import { api } from "../../services/axios/api";
import { Appointments, AppointmentsQuantity, AppointmentsTitle, CarFooter, CarFooterDate, CarFooterPeriod, CarFooterTitle, CarWrapper, Content, Header, MyCarsContainer, SubTitle, Title } from "./styles";

type MyCarsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyCars'
>;

type MyCarsProps = NativeStackScreenProps<RootStackParamList, 'MyCars'>;

interface CarProps {
  car: CarDto;
  user_id: string;
  id: string
  startDate: string
  endDate: string
}

export function MyCars({ route }: MyCarsProps) {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const theme = useTheme()
  const { goBack, navigate } = useNavigation<MyCarsScreenNavigationProp>()

  // const { } = route.params

  function goBackPage() {
    goBack()
  }

  async function fetchCars() {
    try {
      const response = await api.get(`/schedules_byuser?user_id=1`)
      setCars(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])
  return (
    <MyCarsContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />
      <Header>
        <BackButton color="white" onPress={goBackPage} />
        <Title>
          Seus agendamentos,{'\n'}
          estão aqui.
        </Title>
        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>


      </Header>

      {
        loading
          ? (
            <Loading />
          )
          : (
            <Content>
              <Appointments>
                <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
              </Appointments>

              <FlatList
                data={cars}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <CarWrapper>
                    <Car data={item.car} />
                    <CarFooter>
                      <CarFooterTitle>Período</CarFooterTitle>
                      <CarFooterPeriod>
                        <CarFooterDate>{item.startDate}</CarFooterDate>
                        <AntDesign
                          name="arrowright"
                          size={20}
                          color={theme.colors.title}
                          style={{ marginHorizontal: 10 }}
                        />
                        <CarFooterDate>{item.endDate}</CarFooterDate>
                      </CarFooterPeriod>
                    </CarFooter>
                  </CarWrapper>
                )}
              />
            </Content>
          )
      }


    </MyCarsContainer>
  )
}