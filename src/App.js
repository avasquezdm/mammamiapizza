import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './views/Home';
import Cart from './views/Cart';
import PizzaDetail from './views/PizzaDetail';
import Context from './contexts/Context';
import Navigation from './components/Navigation';
import pizzasData from './pizzas.json';

function App() {
  
  // estados y sus funciones para primero traer las pizzas del json y luego llevarlas al carro.
  const [pizzas, setPizzas] = useState([])
  const [pizzasOnCart, setPizzasOnCart] = useState([])

  useEffect(() => {
    // Establece los datos directamente del archivo importado
    setPizzas([...pizzasData]);
  }, []);
  
// función que agrega pizzas al carrito: suma 1 si ya existe o crea la primera, respectivamente
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
// función que agrega pizzas al carrito: suma 1 si ya existe o crea la primera, respectivamente
  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

//  función para calcular el total, considerando cada pizza del carro, sus subtotales y da la sumatoria de estos
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
