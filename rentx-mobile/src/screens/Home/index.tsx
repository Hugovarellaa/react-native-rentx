import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from '../../assets/logo.svg';
import { Car } from "../../components/Car";
import { CarList, Container, Header, HeaderContent, TotalCar } from './styles';



export function Home() {
  const carData = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: 'A0-DIA',
      price: 120
    },
    thumbnail: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/b233f615-f069-4dd8-842b-f19d8c488542/56fcbb98-a7de-4f0a-a40d-7f4ca8607919.png'
  }

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCar>
            Total de 12 Carros
          </TotalCar>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <Car data={carData} />}
        keyExtractor={item => String(item)}
      />

    </Container >
  );
}
