import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';



class Nav extends Component {
    render() {
        return (
            <div className="navhead">
               <Link 
                    smooth={true}
                    duration={2000}
                    to="bnr"> 
                    <img src="https://colorlib.com/preview/theme/appy/images/logo.png" alt="Logo"/>
                </Link>
        
            <div className="navlink">
                <nav>
                    <ul>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="bnr"> Home </Link>
                        </li>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="abt"> About </Link>
                        </li>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="ftrs"> Features </Link>
                        </li>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="gallery"> Gallery </Link>
                        </li>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="price"> Pricing </Link>
                        </li>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="fqr"> FAQ </Link>
                        </li>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="sbscrb"> Blog </Link>
                        </li>
                        <li>
                            <Link
                            // activeClassName="active"
                            smooth={true}
                            duration={2000}
                            to="futa"> Contacts </Link>
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