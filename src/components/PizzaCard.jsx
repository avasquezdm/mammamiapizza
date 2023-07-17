import React, { useContext } from 'react'
import "./PizzaCard.css"
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Context from '../contexts/Context'

const PizzaCard = ({pizza}) => {

  const navigate = useNavigate()
  const goToPizzaDetail = (id) => {
    navigate(`/pizza/${id}`)
  }

  const { addToCart } = useContext(Context)

  

  return (
    <Card style={{ width: '20vw', margin:"0.5em" }}>
      <Card.Img variant="top" src={pizza.img} />

      <Card.Body>
        <Card.Title className='first-let-cap fs-3'>{pizza.name}</Card.Title>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
      <Card.Text className='fw-bold mb-0 ms-2 mt-2'>Ingredientes:</Card.Text>
        <ListGroup.Item className=''>
          <ul>
          {pizza.ingredients.map((ing, i) => {
          return (<li className="ingredient" key={i}>🍕 {ing}</li>)
        })}
        </ul>
        </ListGroup.Item>

        <ListGroup.Item>
        <Card.Text className='text-center fw-bold fs-3'>$ {pizza.price.toLocaleString()}</Card.Text>
          
          <Button 
            className='text-white w-50'
            variant="secondary"
            onClick={() => goToPizzaDetail(pizza.id)}
            >Ver más 👀
          </Button>

          <Button 
            className='w-50'
            variant="success"
            onClick={() => addToCart(pizza.id)}
            >Añadir 🛒
          </Button>

        </ListGroup.Item>
      </ListGroup>

    </Card>
  )
}

export default PizzaCard