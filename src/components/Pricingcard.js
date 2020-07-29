import React from 'react';
import './Features.css';


const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <div class="price-header">
                    <div class="price-icon">
                        <span class="lnr lnr-rocket"></span>
                    </div>
                    <h4 class="upper">Free</h4>
                </div>
                <div class="price-body">
                    <ul>
                        <li>Easy Installations</li>
                        <li>Unlimited support</li>
                        <li>Uniqe Elements</li>
                    </ul>
                </div>
                <div class="price-rate">
                    <sup>&#36;</sup> <span class="rate">0</span> <small>/Month</small>
                </div>
                <a href="#" classnAME="bttn-white">Purchase</a>
            </div>
        </div>
    );
};


export default Card;