import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Cart from './views/Cart';
import PizzaDetail from './views/PizzaDetail';
import Context from './contexts/Context';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  const [pizzas, setPizzas] = useState([])
  const [pizzasOnCart, setPizzasOnCart] = useState([])

  useEffect(() => {
    getData()
  },[]) 

  const getData = async () => {
    const res = await fetch ('http://localhost:3000/pizzas.json')
    const data = await res.json()
    // hasta acá, los datos (json de pizzas) están en "data" entonces hay que setearlos, disponerlos al resto del código; con la función setPizzas quedan en "pizzas"
    setPizzas([...data])
    // el spread operator se agrega porque es más correcto, buena práctica
  }
  

  const addToCart = (id) => {
    const index = pizzasOnCart.findIndex((p) => p.id === id)
    if (index >= 0) {
      pizzasOnCart[index].qty++
      setPizzasOnCart([...pizzasOnCart])
    } else {
      pizzasOnCart.push({id:id, qty:1,})
      setPizzasOnCart([...pizzasOnCart])
    }
  }

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


  return (
    <div className="App">
      <Context.Provider value={{pizzas, total: calculateTotal(), addToCart, pizzasOnCart, setPizzasOnCart}}>
        <BrowserRouter>
        <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/pizza/:id" element={<PizzaDetail></PizzaDetail>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="*" element={<div className='d-flex justify-content-center'><img src="https://raw.githubusercontent.com/gaoryrt/retro-404/master/screen-shots/win98.jpg" alt="Not found"></img></div>}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
