import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useTheme } from 'styled-components';
import { RootStackParamList } from "../../@types/navigation";
import { Accessory } from "../../Components/Accessory";
import { BackButton } from "../../Components/BackButton";
import { Button } from "../../Components/Button";
import { ImageSlider } from "../../Components/ImageSlider";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { About, AccessoryWrapper, Brand, CarDetailsContainer, Description, Details, Footer, Header, Name, Period, Price, Rent } from "./styles";

type CarDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

type CarDetailsProps = NativeStackScreenProps<RootStackParamList, 'CarDetails'>;


export function CarDetails({ route }: CarDetailsProps) {

  const { goBack, navigate } = useNavigation<CarDetailsScreenNavigationProp>()
  const { car } = route.params
  const theme = useTheme()

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 125],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  function goBackPage() {
    goBack()
  }

  function handleNextPage() {
    navigate('Scheduling', {
      car
    })
  }

  return (
    <CarDetailsContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle='dark-content'
      />

      <Animated.View style={[headerStyleAnimation, styles.header, {
        backgroundColor: theme.colors.background_secondary
      }]}>
        <Header>
          <BackButton color="gray" onPress={goBackPage} />
        </Header>
        <Animated.View style={[sliderCarsStyleAnimation, {
          marginTop: getStatusBarHeight() + 32
        }]}>
          <ImageSlider
            imagesUrl={car.photos}
          />
        </Animated.View>

      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={17}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>

        <AccessoryWrapper>
          {
            car.accessories.map(accessory => (
              <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
            ))
          }
        </AccessoryWrapper>

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleNextPage} />
      </Footer>
    </CarDetailsContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1
  },
})