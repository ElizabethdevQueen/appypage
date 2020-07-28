import React, { Component } from 'react';
import './Nav.css';
// import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className="navhead">
                <img src="https://colorlib.com/preview/theme/appy/images/logo.png" alt="Logo"/>
            <div className="navlink">
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Features
                        </li>
                        <li>
                            Gallery
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            FAQ
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Contacts
                        </li>
                    </ul>
                </nav>
            </div>
                <button className="btn">SIGN UP</button>
            </div>
        );
    }
}

export default Nav;