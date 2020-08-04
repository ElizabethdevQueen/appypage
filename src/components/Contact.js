import React, { Component } from 'react';
import './Subscribe.css';

class Contact extends Component {
    render() {
        return (
            <div className="footer" id="futa">
                <div className="featuretext">
                    <h1>---- CONTACT US ----</h1>
                    <h3>Find Us By Bellow Details</h3>
                </div>

                <div className="footer-content">
                    <div className="ui container comments">
                        <div className="comment">
                            <a href="/" className="icons">
                                <i class="map marker alternate icon"></i>
                            </a>

                            <div className="text">
                                <h1>8-54 Paya Lebar Square</h1>
                                <p>60 Paya Lebar Roa SG, Singapore</p>
                            </div>
                        </div>
                    </div>
                    <div className="ui container comments">
                        <div className="comment">
                            <a href="/" className="icons">
                                <i class="phone icon"></i>
                            </a>

                            <div className="text">
                                <h1>+65 93901336</h1>
                                <p>+65 93901337</p>
                            </div>
                        </div>
                    </div>
                    <div className="ui container comments">
                        <div className="comment">
                            <a href="/" className="icons">
                                <i class="envelope icon"></i>
                            </a>

                            <div className="text">
                                <h1>yourmail@gmail.com</h1>
                                <p>backpiper.com@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-nav">
                    <p>Copyright &copy;2020 All rights reserved | This template is made <br/>with <i class="fa fa-heart-o" aria-hidden="true"></i> by Colorlib</p>
                    <nav>
                        <ul>
                            <li>
                                About
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Testimonial
                            </li>
                            <li>
                                Contacts
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Contact;