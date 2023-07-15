// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import Context from '../contexts/Context'
// import { Button } from 'react-bootstrap'

// const PizzaDetail = () => {

//   const { id } = useParams()
//   const { pizzas, addToCart } = useContext(Context)

//   const currentPizza = pizzas.find((p) => p.id === id)

//   return (


//     <div className="card w-75 mx-auto mt-2">
//   <div  iv className="row g-0">
    
//     <div className="col-md-5">
//       <img src={currentPizza.img} className="detail-img" alt={currentPizza.name}/>
//     </div>
    
//     <div className="col-md-7">
//       <div className="card-body">
//         <h5 className="card-title fw-bolder first-let-cap">{currentPizza.name}</h5>
//         <p className="card-text">{currentPizza.desc}</p>
        
//         <div><p className="card-text">
//           <p><b>Ingredientes:</b></p>
//           <ul>
//           {currentPizza.ingredients.map((ing, i) => {
//           return (<li className="ingredient" key={i}>🍕 {ing}</li>)
//         })}
//         </ul></p>
        
//         <div className='d-flex justify-content-between'>

//           <div className="card-text fw-bold fs-4">Precio: ${currentPizza.price}</div>
          
//           <Button 
//             variant="danger"
//             onClick={() => addToCart(currentPizza.id)}
//             >Añadir 🛒
//           </Button>

//         </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

// export default PizzaDetail




import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../contexts/Context';
import { Button, Card, Col, Row } from 'react-bootstrap';

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(Context);

  const currentPizza = pizzas.find((p) => p.id === id);

  return (
    <Card className="w-50 mx-auto mt-4">
      <Row noGutters>
        <Col md={5} className="d-flex align-items-center">
          <div className="square-image-container">
            <div
              className="square-image"
              style={{ backgroundImage: `url(${currentPizza.img})` }}
              alt={currentPizza.name}
            />
          </div>
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title className="fw-bolder first-let-cap">{currentPizza.name}</Card.Title>
            <Card.Text>{currentPizza.desc}</Card.Text>
            <Card.Text>
              <b>Ingredientes:</b>
            </Card.Text>
            <ul>
              {currentPizza.ingredients.map((ing, i) => (
                <li className="ingredient" key={i}>
                  🍕 {ing}
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <div className="fw-bold fs-4">Precio: ${currentPizza.price.toLocaleString()}</div>
              <Button variant="danger" onClick={() => addToCart(currentPizza.id)}>
                Añadir 🛒
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PizzaDetail;

