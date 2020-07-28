import React, { Component } from 'react';
import './About.css';

class Progress extends Component {
    render() {
        return (
            <div className="progress-wrap">
                <div className="progress-text"> 
                    <h1> OUR PROGRESS </h1>
                    <h3> Grat Application Ever </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>

                    <button className="btnsp">LEARN MORE</button>
                </div>

                <div className="progress-image">
                    <img src="https://colorlib.com/preview/theme/appy/images/progress-phone.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default Progress;