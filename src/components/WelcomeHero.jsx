import Card from 'react-bootstrap/Card';
import "./WelcomeHero.css"

function WelcomeHero() {
  return (
    <Card className="bg-dark text-white WelcomeHero mb-4">
      <Card.Img className='custom-img' src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg" alt="Pizza de ejemplo" />
      <Card.ImgOverlay >
        <Card.Title className='hero-card-title fw-bold'>¡Pizzería Mamma Mía!</Card.Title>
        <Card.Text className='fs-5'>
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </Card.Text>
        <hr/>
      </Card.ImgOverlay>
    </Card>
  );
}

export default WelcomeHero;