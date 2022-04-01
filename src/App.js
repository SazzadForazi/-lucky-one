import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Cart from './Components/Cards/Cart/Cart';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCard = (Product) => {
    const newCart = [...cart, Product]
    console.log(newCart);
    setCart(newCart)
  }

  useEffect(() => {
    fetch("bikes.JSON")
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="row">

          {
            items.map(item => (
              <Cards
                addToCard={addToCard}
                key={item.imdbID}
                data={item}
              >
              </Cards>
            ))
          }
        </div>
      </div>


      <div className="col-md-3">

        <Cart
          cart={cart}
        >
        </Cart>
      </div>
    </div>
  );
}

export default App;


