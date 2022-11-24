import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert, StatusBar, StyleSheet } from "react-native";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { RFValue } from 'react-native-responsive-fontsize';
import { RootStackParamList } from "../../@types/navigation";
import LogoSvg from '../../assets/logo.svg';
import { Car } from "../../Components/Car/inde";
import { Loading } from "../../Components/Loading";
import { CarDto } from "../../dtos/CarDto";
import { api } from "../../services/axios/api";
import { CarList, Header, HeaderWrapper, HomeContainer, TotalCar } from "./styles";

import { Ionicons } from '@expo/vector-icons';
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export function Home() {
  const [cars, setCars] = useState<CarDto[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme()

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx: any) {
      positionX.value = event.translationX + ctx.positionX
      positionY.value = event.translationY + ctx.positionY
    },
    onEnd() {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }

  })


  function handleNextPage(car: CarDto) {
    navigation.navigate('CarDetails', { car })
  }

  function handleOpenMyCarPage() {
    navigation.navigate('MyCars')

  }

  async function fetchCar() {
    try {
      const response = await api.get('/cars')
      setCars(response.data)
    } catch (error) {
      Alert.alert("Opa", "Não foi possível mostra os Carros")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCar()
  }, [])
  return (
    <HomeContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />

      <Header>
        <HeaderWrapper>
          <LogoSvg width={RFValue(108)} height={RFValue(12)} />
          <TotalCar>Total de {cars.length} Carros</TotalCar>
        </HeaderWrapper>
      </Header>

      {
        loading
          ? <Loading />
          : (
            <CarList
              data={cars}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <Car data={item} onPress={() => handleNextPage(item)} />}
            />
          )
      }

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[myCarsButtonStyle, {
          position: 'absolute',
          bottom: 13,
          right: 22
        }]}>
          <ButtonAnimated
            onPress={handleOpenMyCarPage}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name='ios-car-sport'
              size={32}
              color={theme.colors.shape}
            />

          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>


    </HomeContainer>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})