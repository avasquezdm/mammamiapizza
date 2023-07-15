import React, { useContext } from 'react'
import Context from '../contexts/Context'
import { Col, Row } from 'react-bootstrap'
import PizzaCard from '../components/PizzaCard'
import WelcomeHero from '../components/WelcomeHero'

const Home = () => {
  //desestructuración... si pongo pizzas sin llaves, hay que estar llamando siempre como nombreVariable.pizzas...
  const { pizzas } = useContext(Context)

    return (
    <div>
        <WelcomeHero></WelcomeHero>
        <Row className='m-auto w-75 p-3'>
            {pizzas.map((p,i) => {
                    return <Col key={i}>
                          <PizzaCard  PizzaCard pizza={p}></PizzaCard>
                          </Col>
                })}
        </Row>

    </div>
  )
}

export default Home