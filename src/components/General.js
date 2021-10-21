import React, { Component } from "react";
import Field from "./Field";
import Buttons from "./Buttons";
import ReactToPrint from "react-to-print";
import DocIcon from "./../images/document.png"




class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showForm: true
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }  

    render() {
    const { showForm } = this.state; 
        return (
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <div className="formHeader"> 
                        <div className="formHeaderdesc">
                            <img src={DocIcon} />
                            <h3>General Information</h3>
                        </div>
                        <Buttons showForm={showForm} />
                    </div>
                    <div className="formFields">
                        <Field fieldName="name" labelName="Name:" showForm={showForm} />
                        <Field fieldName="email" labelName="Email:" fieldType="email" showForm={showForm} />
                        <Field fieldName="phone" labelName="Phone:" showForm={showForm} />
                    </div>
                </form>
            </div>
        );    
    }; 
}




export default General