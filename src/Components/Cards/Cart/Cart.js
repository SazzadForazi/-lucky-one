import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    return (
        <div>
            <h3>
                <i class="fa">&#xf07a;</i>{cart.length}
            </h3>
            <ul>
                {
                    cart.map(pd => <li>{pd.Title}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;