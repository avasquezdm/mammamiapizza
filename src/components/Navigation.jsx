import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Context from '../contexts/Context'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  
    const { total } = useContext(Context)
  
    return (
        <Navbar className="bg-dark sticky-top">
        <Container>
          <Navbar.Brand><Link to="/" className='no-decoration text-white'>🍕 ¡Pizzería Mamma Mía!</Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='text-white fs-5'>
              <Link to ="/cart" className='no-decoration text-white'>Ve tu carrito! 🛒 $ {total.toLocaleString()}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}


export default Navigation