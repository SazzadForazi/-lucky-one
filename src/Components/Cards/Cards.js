import React from 'react';
import "./Cards.css"
const Cards = (props) => {
    // console.log(props);
    const { Title, Budget, Poster, Rating } = props.data || {};
    // console.log(Budget);
    return (
        <div className='col-md-4 mb-2'>
            <div className="card mb-3">
                <img src={Poster} className="card-img-top imge" alt="..." />
                <div className="card-body text-white bg-dark">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">Budget: {Budget}</p>
                    <p className="card-text">Rating: {Rating}</p>
                    <button
                        onClick={() => props.addToCard(props.data)}
                        className="btn btn-secondary">Add Product <i class="fa">&#xf07a;</i></button>
                </div>
            </div>
        </div>


    );
};

export default Cards;



