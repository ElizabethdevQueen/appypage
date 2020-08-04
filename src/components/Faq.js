import React, { Component } from 'react';
import './Features.css';
import Faqaccordion from './Faqaccordion';

class Faq extends Component {
    state = {
        data:[
            {
                title:"Faq first question goes here?",
                text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                title: "About frequent question goes here?",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                title: "Why more question goes here?",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                title: "What question goes here?",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
        ],
        data2:[
            {
                title: "Faq second question goes here?",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                title: "Third faq question goes here?",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                title: "Why more question goes here?",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                title: "Seventh frequent question here?",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
        ]
    }
    render() {
        const{data, data2} = this.state;
        return (
            <div className="faq-container" id="fqr">
                <div className="featuretext">
                    <h1>---- FAQ ----</h1>
                    <h3>Frequently Asked Questions</h3>
                </div>

                <div className="faq-content">
                    <div className="fcontent">
                        <div className="faq-accordion">
                            {data.map((item,index)=>{
                                return <Faqaccordion Key={index} title={item.title} text={item.text} />
                                })
                            }
                        </div>
                    
                        <div className="faq-accordion">
                            {data2.map((item, index) => {
                                return <Faqaccordion Key={index} title={item.title} text={item.text} />
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;