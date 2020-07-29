import React, { Component } from 'react';
import './Subscribe.css';

class Contact extends Component {
    render() {
        return (
            <div className="footer">
                <div className="featuretext">
                    <h1>---- CONTACT US ----</h1>
                    <h3>Find Us By Bellow Details</h3>
                </div>

                <div>

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