import React, { Component } from 'react';
import './About.css';
// import Iframe from 'react-iframe'

class Videofeatures extends Component {
    render() {
        return (
            <div className="video-container">
                <div className="mainvideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ScrDhTsX0EQ" title="letsplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </div>

                <div className="videotext">
                    <h1> VIDEO FEATURES </h1>
                    <h3> Grat Application Ever </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused. </p>

                    <button className="btnvf">LEARN MORE</button>
                </div>
            </div>
        );
    }
}

export default Videofeatures;