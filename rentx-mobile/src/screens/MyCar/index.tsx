import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { Loading } from "../../components/Loading";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/axios";

import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle, CarFooter, CarFooterDate, CarFooterPeriod, CarFooterTitle, CarWrapper,
  Content,
  Header,
  MyCarContainer,
  SubTitle,
  Title
} from "./styles";

interface CarProps {
  id: string
  car: CarDTO;
  user_id: string
  startDate: string
  endDate: string
}

export function MyCar() {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const theme = useTheme()
  const navigation = useNavigation<NavigationProp<ParamListBase>>();


  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await api.get(`/schedules_byuser?user_id=1`)
        console.log(response.data)
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCar()
  }, [])

  return (
    <MyCarContainer >
      <Header>
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />

        <Title>
          Seus agendamentos,{"\n"}
          estão aqui.
        </Title>
        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>

      </Header>

      {
        loading ? (
          <Loading />
        ) : (
          <Content>
            <Appointments>
              <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
              <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
            </Appointments>

            <FlatList
              data={cars}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
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


    </MyCarContainer>
  )
}
