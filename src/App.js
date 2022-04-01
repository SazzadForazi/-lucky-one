import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import Cart from './Components/Cards/Cart/Cart';
import Header from './Components/Cards/Header/Header';
import QUESTION from './Components/Cards/QUESTION/QUESTION';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCard = (Product) => {
    const newCart = [...cart, Product]
    // console.log(newCart);
    setCart(newCart)
  }
  const refreshtoCart = (Product) => {
    // Product.value = ''
    // console.log(newCart);
    window.location.reload(false);
  }
  useEffect(() => {
    fetch("bikes.JSON")
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  return (

    <div>
      <Header></Header>
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
            refreshtoCart={refreshtoCart}
            cart={cart}
          >
          </Cart>
        </div>
      </div>
      <QUESTION></QUESTION>
    </div>

  );
}

export default App;


