import React, { Component } from 'react';
import Card from './Pricingcard';
import './Features.css';

class Pricingplan extends Component {
    render() {
        return (
            <div className="pricing-wrap">
                <div className="featuretext">
                    <h1>---- PRICING PLAN ----</h1>
                    <h3>Our Awesome Pricing Plan</h3>
                </div>

                <div  className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card text="FREE" list3="Uniqe Elements" price="0"/>
                        </div>
                        <div className="col-md-4">
                            <Card text="MEDIUM" list3="Free Forever" price="49"/>
                        </div>
                        <div className="col-md-4">
                            <Card text="BUSINESS" list3="Free Forever" price="99"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Pricingplan;