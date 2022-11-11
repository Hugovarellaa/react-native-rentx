import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from '../../assets/logo.svg';
import { Car } from "../../components/Car";
import { Container, Header, HeaderContent, TotalCar } from './styles';



export function Home() {
  const carDataOne = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: 'A0-DIA',
      price: 120
    },
    thumbnail: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/b233f615-f069-4dd8-842b-f19d8c488542/56fcbb98-a7de-4f0a-a40d-7f4ca8607919.png'
  }
  const carDataSecond = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: 'A0-DIA',
      price: 340
    },
    thumbnail: 'https://i.pinimg.com/originals/e3/99/6c/e3996cbc32b254dd28205dd7e36a6a11.png'
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

      <Car data={carDataOne} />
      <Car data={carDataSecond} />
    </Container >
  );
}
