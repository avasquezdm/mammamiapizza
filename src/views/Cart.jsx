import React, { useContext } from 'react';
import Context from '../contexts/Context';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { pizzas, pizzasOnCart, setPizzasOnCart, addToCart } = useContext(Context);

  const removeFromCart = (id) => {
    const index = pizzasOnCart.findIndex((p) => p.id === id);
    if (pizzasOnCart[index].qty > 1) {
      pizzasOnCart[index].qty--;
      setPizzasOnCart([...pizzasOnCart]);
    } else {
      pizzasOnCart.splice(index, 1);
      setPizzasOnCart([...pizzasOnCart]);
    }
  };

  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  const calculateTotal = () => {
    let total = 0;
    pizzasOnCart.forEach((p) => {
      const pizza = getPizzaById(p.id);
      if (pizza) {
        const subtotal = pizza.price * p.qty;
        total += subtotal;
      }
    });
    return total;
  };

  const emptyCart = () => {
    setPizzasOnCart([])
  }

  return (
    <Container className='w-50 mt-5 pb-5'>
      <p className='fw-bold ms-5 fs-5'>Detalle del pedido:</p>
        {pizzasOnCart.map((p) => {
          const pizza = getPizzaById(p.id);
          if (pizza) {
            const subtotal = pizza.price * p.qty
            return (
              <div key={p.id} className='d-flex justify-content-between border-bottom p-2 align-items-center'>
                
                <div className='d-flex align-items-center'>
                  <img src={pizza.img} alt='Pizza img' className='cart-img me-3'></img>
                  <div className='first-let-cap fw-bold'>{pizza.name}</div>
                </div>
                
                <div className='d-flex align-items-center'>
                  
                  <div className='me-2 fw-bold text-success'>$ {subtotal.toLocaleString()}</div>
                  
                  <div>
                    <Button variant="danger" onClick={() => removeFromCart(p.id)}> - </Button>
                  </div>
                  
                  <div className='fw-bold mx-2'>{p.qty}</div>
                  
                  <div>
                    <Button onClick={() => addToCart(p.id)}>+</Button>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      <p className='fw-bold fs-4 mt-4'>Total: $ {calculateTotal().toLocaleString()}</p>
      <div className='d-flex justify-content-between'>
        <Button onClick={() => alert("Naah... Hasta aquí llega mi proyecto. ¡Gracias!")} variant="success">Ir a pagar</Button>
        <div>
        <Button onClick={() => emptyCart()} variant="danger">Vaciar carrito</Button>
        <Link to="/"><Button className='ms-2'>Volver al menú</Button></Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
