import React from 'react';
import './Features.css';


const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <i class="space shuttle icon"></i>
                <h4 className="price-text">{props.text}</h4>
            </div>

            <div class="card-body text-dark">
                <ul className="card-text text-secondary">
                    <li>Easy Installations</li>
                    <li>Unlimited support</li>
                    <li>{props.list3}</li>
                </ul>   
            <div className="amount">
            <sup>&#36;</sup> <span className="rate">{props.price}</span> <small>/Month</small> <br/>
            </div>
                <button className="btnpr btn-outline-success">Purchase</button>
            </div>
        </div>
    );
};


export default Card;