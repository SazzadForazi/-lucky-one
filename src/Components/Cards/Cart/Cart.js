import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}

    return (
        <div>
            <h3>
                <i className="fa">&#xf07a;</i>{cart.length}
            </h3>
            <ul>

                {
                    cart.map(pd => <li>{pd.Title}</li>)
                }
            </ul>
            <button
                onClick={() => props.refreshtoCart(props)}
                className="btn btn-secondary">CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;



// <div>
// document.body.innerHTML = pd[Math.floor(Math.random()*pd.length)];
// </div>