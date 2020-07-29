import React from 'react';
import './Features.css';


const Testimony = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <i class="space shuttle icon"></i>
                <h4 className="price-text">{props.text}</h4>
            </div>

            <div className="test-row">
                <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src={props.img} alt="" />
                        <h3>
                            Ashekur Rahman <br/> <span className="testspan">Art Director</span>
                        </h3>
                        <blockquote>
                            Lorem ipsum dolor sit amet, consectetur adipiing elit, labore et laborused sed do eiusmod tempo
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Testimony;