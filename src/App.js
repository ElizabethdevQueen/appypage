import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Nav from './Nav';
import Banner from './Banner';
import About from './About'; 
// import Progress from './Progress';
import Videofeatures from './Videofeatures';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Screenshot from './components/Screenshot';
import Designfeatures from './components/Designfeatures';
import Downloadfeatures from './components/Downloadfeatures';
import Pricingplan from './components/Pricingplan';
import Faq from './components/Faq';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
// import { Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>  
                <Nav />
                <Banner/>
                <About/>
                <Videofeatures/>
                <Features/>
                <Testimonials/>
                <Screenshot/>
                <Designfeatures  />
                <Downloadfeatures  />
                <Pricingplan/>
                <Faq/>
                <Subscribe/>
                <Contact/>
        </div>
    );
  }
}

export default App;