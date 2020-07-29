import React, { Component } from 'react';
import './Features.css';

class Downloadfeatures extends Component {
    render() {
        return (
            <div className="maindownload">
                <img src="https://colorlib.com/preview/theme/appy/images/download-image.png" alt="" />
                <div className="downloadtext">
                    <h1>Download The App</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam <br/>possimus eaque magnam eum praesentium unde.</p>
                
                    <button className="btndld"><i class="apple icon"></i> APPLE STORE </button>
                    <button className="btndld"><i class="google play icon pull-left"></i> PLAY STORE </button>
                </div>
            </div>
        );
    }
}

export default Downloadfeatures;