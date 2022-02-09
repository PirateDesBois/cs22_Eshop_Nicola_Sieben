import React, { useState } from 'react';
import Article from './components/Article';
function App() {
  // Basket ---------------------------------------------------------
  let [basket, setBasket] = useState([]);
  // Basket ---------------------------------------------------------
  //basketValue ----------------------------------------------------

  //basketValue ----------------------------------------------------
  //Wallet ----------------------------------------------------------
  let [money, setMoney] = useState(1600);
  //Wallet ----------------------------------------------------------
  function btn(i) {
    let newArt=[...Art]
    let newBasket=[...basket]
    newBasket.push(newArt[i])
    if (money > 0 && money < newArt[i].prix) {
      alert("You don't have enough money to buy items");
    } else if (money > 0 && money > newArt[i].prix && newArt[i].stock > 0) {
      setMoney(money - newArt[i].prix);
      (newArt[i].stock -= 1)
    }
    if (newArt[i].stock===1) {
      newArt[i].priceClass="text-danger"
      newArt[i].prix=newArt[i].prix/2
    }
    if (newArt[i].stock === 0) {
      newArt[i].cln= "btn btn-danger"
      newArt[i].content="Out of stock"
    }
    setArt(newArt)
    setBasket(newBasket)
  }
  // Remove Basket function --------------------------------------
  function remove(i) {
    let newArt = [...Art]
    basket.splice(newArt[i],1)
    setArt(newArt)
  }
  // Remove Basket function --------------------------------------
  //Object ----------------------------------------------------------
  const [Art, setArt] = useState([
    {
      nom: 'Rondo gravel Bike',
      stock: 5,
      prix: 1385.50,
      image: "../img/rondo.jpg",
      cln: "btn btn-success",
      content: "Add to card",
      count:0,
      priceClass:"price"
    },
    {
      nom: 'Pompe Lezyne',
      stock: 22,
      prix: 24.95,
      image: "../img/pompe.jpg",
      cln: "btn btn-success",
      content: "Add to card",
      count:0,
      priceClass:"price"
    },
    {
      nom: 'Bidon Zefal orange transparent',
      stock: 7,
      prix: 5.99,
      image: "../img/bidon.jpg",
      cln: "btn btn-success",
      content: "Add to card",
      count:0,
      priceClass:"price"
    },
    {
      nom: 'Ellipse Bahn Kit de roues',
      stock: 15,
      prix: 29.95,
      image: " ../img/pochette.jpg",
      cln: "btn btn-success",
      content: "Add to card",
      count:0,
      priceClass:"price"
    },
    {
      nom: 'Ellipse Bahn Kit de roues',
      stock: 3,
      prix: 401.99,
      image: " ../img/roues.jpg",
      cln: "btn btn-success",
      content: "Add to card",
      count:0,
      priceClass:"price"
    },
    {
      nom: 'blackheath fixie',
      stock: 3,
      prix: 259.00,
      image: " ../img/fixie.jpg",
      cln: "btn btn-success",
      content: "Add to card",
      count:0,
      priceClass:"price"
    }
  ]);
  //Object ----------------------------------------------------------
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-center  ">
          <i className="fas fa-wallet fs-1 text-dark"></i><span className="border border-3 border-dark ms-2 bg-secondary"> {money}  €</span>
        </div>

        {Art.map((x, i) =>
          <Article
            key={i}
            money={money}
            setMoney={setMoney}
            setArt={setArt}
            money={money}
            setMoney={setMoney}
            Art={x}
            btn={btn}
            index={i}
            count={0}
            priceClass={"price"}
          />
        )}

        {basket.map((element, index) => {
          return (
            <div className="Panier" key={index}>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Product:  {element.nom}</li>
                  <li className="list-group-item">Units :  {element.count+1}</li>
                  <li className="list-group-item">Price : {element.prix} €</li>
                  <button type="button" className="btn btn-outline-danger" onClick={()=>remove(element)} >Remove</button>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App;

