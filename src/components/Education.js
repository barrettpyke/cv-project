import React, { Component } from "react";
import Field from "./Field";
import Buttons from "./Buttons";
import SchoolIcon from "./../images/school.png"

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showForm: true,
        addFields: false
    };
  }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }  

    addClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            addFields: !prevState.addFields
        }));
        
    }

    render() {
    const { showForm, addFields } = this.state; 
        if (!addFields) {
        return (
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <div className="formHeader"> 
                    <div className="formHeaderdesc">
                            <img src={SchoolIcon} />
                            <h3>Education</h3>
                        </div>
                        <Buttons showForm={showForm} />
                    </div>
                    <div className="formFields">
                        <Field fieldName="schoolName" labelName="School Name:" showForm={showForm} />
                        <Field fieldName="major" labelName="Major:" showForm={showForm} />
                        <Field fieldName="gradYear" labelName="Grad Year:" fieldType="date" showForm={showForm} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary addButton" onClick={this.addClick}>Add</button>
                    </div>
                </form>
            </div>
        );  
        } else { 
            return (
                <div className="form">
                <form onSubmit={this.onSubmit}>
                    <div className="formHeader"> 
                    <div className="formHeaderdesc">
                            <img src={SchoolIcon} />
                            <h3>Education</h3>
                        </div>
                        <Buttons showForm={showForm} />
                    </div>
                    <div className="formFields">
                        <Field fieldName="schoolName" labelName="School Name:" showForm={showForm} />
                        <Field fieldName="major" labelName="Major:" showForm={showForm} />
                        <Field fieldName="gradYear" labelName="Grad Year:" fieldType="date" showForm={showForm} />
                    </div>
                    <div className="formFields formFieldsAdd">
                        <Field fieldName="schoolName" labelName="School Name:" showForm={showForm} />
                        <Field fieldName="major" labelName="Major:" showForm={showForm} />
                        <Field fieldName="gradYear" labelName="Grad Year:" fieldType="date" showForm={showForm} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary addButton" onClick={this.addClick}>Remove</button>
                    </div>
                </form>
                </div>
            );
        }
    } 
}




export default Education