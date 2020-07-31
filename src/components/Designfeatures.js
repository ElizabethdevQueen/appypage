import React, { Component } from 'react';
import './Features.css';

class Designfeatures extends Component {
    render() {
        return (
            <div className="maindesign">
                <div className="designtext">
                    <h1> OUR FEATURES </h1>
                    <h3> Aour Approach of Design is Prety Simple and Clear </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>

                    <button className="btndf">LEARN MORE</button>
                </div>

                <div className="designcard">
                    <div className="ui container comments">
                        <div className="comment">
                            <a href="/" className="icons">
                                <i class="rocket icon"></i>
                            </a>

                            <div className="text">
                                <h1>Easy Notifications</h1>
                                <p>Lorem ipsum dolor sit amet, <br />adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ui container comments">
                        <div className="comment">
                            <a href="/" className="icons">
                                <i class="rocket icon"></i>
                            </a>

                            <div className="text">
                                <h1>Fully Responsive</h1>
                                <p>Lorem ipsum dolor sit amet, <br />adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ui container comments">
                        <div className="comment">
                            <a href="/" className="icons">
                                <i class="rocket icon"></i>
                            </a>

                            <div className="text">
                                <h1>Editable Layout</h1>
                                <p>Lorem ipsum dolor sit amet, <br />adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Designfeatures;