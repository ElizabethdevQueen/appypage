import React, { Component } from 'react';
import './Features.css';

class Screenshot extends Component {
    render() {
        return (
            <div className="main-screenshot">
                <div className="scrollarea">
                    <img src="" alt=""/>

                </div>
                <div className="screenshot-text">
                    <h1> SCREENSHOTS ---- </h1>
                    <h3> Screenshot 01 </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur <br/>adipiing elit, sed do eiusmod tempor <br/> incididunt ut labore et laborused sed do <br /> eiusmod tempor incididunt ut labore et <br/> laborused.</p>

                    <button className="btnsp">LEARN MORE</button>
                </div>
            </div>
        );
    }
}

export default Screenshot;