import React, { Component } from 'react';
import './Features.css';
import FeaturesDetails from './FeaturesDetails';
// import FeaturesDetail2 from './FeaturesDetail2';

class Features extends Component {
    render() {
        return (
            <section className="features-wrap">
                <div className="featuretext">
                    <h1>---- FEATURES ----</h1>
                    <h3>Pwoerful Features As Always</h3>
                </div>
                
                    <div className="feature-content">
                        <div className="ui container comments">
                            <FeaturesDetails />
                            <FeaturesDetails />
                            <FeaturesDetails />
                        </div>
                    
                
                
                        
                        <img src="https://colorlib.com/preview/theme/appy/images/feature-image.png"  alt="" />

                        <div className="ui container comments">
                            <FeaturesDetails />
                            <FeaturesDetails />
                            <FeaturesDetails />
                        </div>
    
                </div>
            </section>
        );
    }
}

export default Features;