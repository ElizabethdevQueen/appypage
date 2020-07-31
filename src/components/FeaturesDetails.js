import React from 'react';
import './Features.css';


const FeaturesDetails = (props) => {
    
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="icons">
                    <i class="rocket icon"></i>
                </a>
                
                <div className="text">
                    <h1>{props.name}</h1>
                    <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}


export default FeaturesDetails;