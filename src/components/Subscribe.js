import React, { Component } from 'react';
import './Subscribe.css';

class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe-wrap" id="sbscrb">
                <div className="sub-form">
                    <h1>Subscribe for More Features</h1>
                    <input placeholder="Enter your email" type="text"  />
                    <button className="btnvf"><i class="location arrow icon"></i> Subscribe</button>
                </div>
            </div>
        );
    }
}

export default Subscribe;