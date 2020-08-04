import React, { Component } from 'react';
import './Features.css';

class Screenshot extends Component {
    render() {
        return (
            <div className="main-screenshot" id="scrnsht">
                <div className="scrollarea">
                    <img src="https://colorlib.com/preview/theme/appy/images/download-image.png" height="700px" alt=""/>

                    <div id="outerbox">
                        <div id="sliderbox">
                            <img src="https://colorlib.com/preview/theme/appy/images/gallery-1.jpg" alt="" height="500" />
                            <img src="https://colorlib.com/preview/theme/appy/images/gallery-2.jpg" alt="" height="500" />
                            {/* <img src="https://colorlib.com/preview/theme/appy/images/gallery-3.jpg" alt="" height="500" />
                            <img src="https://colorlib.com/preview/theme/appy/images/gallery-4.jpg" alt="" height="500" />
                             */}
                        </div>

                    </div>
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