import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner-container">
                <img src="https://colorlib.com/preview/theme/appy/images/header-mobile.png" alt=""/>
                <div className="banner-text">
                    <h1>Start your amazing <br/>stuff through appy.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, <br/>sed do eiusmod tempor incididunt ut labore et laborused sed do <br/>eiusmod tempor incididunt ut labore et laborused.</p>

                    <button className="btn-d"><i class="fa fa-download" aria-hidden="true"></i>  DOWNLOAD APP</button>
                </div>
            </div>
        );
    }
}

export default Banner;