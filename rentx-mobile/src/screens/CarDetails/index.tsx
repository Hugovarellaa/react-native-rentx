
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Container, Header } from './styles';


export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <ImageSlider imagesUrl={["https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/b233f615-f069-4dd8-842b-f19d8c488542/56fcbb98-a7de-4f0a-a40d-7f4ca8607919.png"]} />
    </Container>
  );
}
