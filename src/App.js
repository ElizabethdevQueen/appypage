import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import About from './About'; 
import Progress from './Progress';
import Videofeatures from './Videofeatures';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <About />
        <Progress />
        <Videofeatures />
      </div>
    );
  }
}

export default App;