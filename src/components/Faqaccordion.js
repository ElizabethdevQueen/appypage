import React, { Component } from 'react';
import './Features.css';

class Faqaccordion extends Component {
    state={
        showInfo:false
    }
    handleToggle=()=>{
        this.setState({
            showInfo:true
        })
    }
    render(props) {
        const {title,text}= this.props;
        return (
            <section className="faqsection">
                <div className="single-accord">
                    <div className={this.state.showInfo?'tab active':'tab'} onClick={this.handleToggle}>
                        <i class="fa fa-plus" aria-hidden="true" onClick={this.handleToggle}></i> <p>{title}</p>
                    </div>
                    <div className={this.state.showInfo?'showContent content': 'content'}>
                        <p>{text}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faqaccordion;