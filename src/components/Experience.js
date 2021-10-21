import React, { Component } from "react";
import Field from "./Field";
import Buttons from "./Buttons";
import PortfolioIcon from "./../images/portfolio.png";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showForm: true,
        addFields: false
    };
    
    this.onSubmit = this.onSubmit.bind(this);
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
        if(!addFields) {
        return (
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <div className="formHeader"> 
                    <div className="formHeaderdesc">
                            <img src={PortfolioIcon} />
                            <h3>Experience</h3>
                        </div>
                        <Buttons showForm={showForm} />
                    </div>
                    <div className="formFields">
                        <Field fieldName="companyName" labelName="Company Name:" showForm={showForm} />
                        <Field fieldName="jobTitle" labelName="Job Title:" showForm={showForm} />
                        <Field fieldName="description" labelName="Description:" showForm={showForm} />
                        <Field fieldName="startDate" labelName="Start Date:" fieldType="date" showForm={showForm} />
                        <Field fieldName="endDate" labelName="End Date:" fieldType="date" showForm={showForm} />
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
                            <img src={PortfolioIcon} />
                            <h3>Experience</h3>
                        </div>
                        <Buttons showForm={showForm} />
                    </div>
                    <div className="formFields">
                        <Field fieldName="companyName" labelName="Company Name:" showForm={showForm} />
                        <Field fieldName="jobTitle" labelName="Job Title:" showForm={showForm} />
                        <Field fieldName="description" labelName="Description:" showForm={showForm} />
                        <Field fieldName="startDate" labelName="Start Date:" fieldType="date" showForm={showForm} />
                        <Field fieldName="endDate" labelName="End Date:" fieldType="date" showForm={showForm} />
                    </div>
                    <div className="formFields formFieldsAdd">
                        <Field fieldName="companyName" labelName="Company Name:" showForm={showForm} />
                        <Field fieldName="jobTitle" labelName="Job Title:" showForm={showForm} />
                        <Field fieldName="description" labelName="Description:" showForm={showForm} />
                        <Field fieldName="startDate" labelName="Start Date:" fieldType="date" showForm={showForm} />
                        <Field fieldName="endDate" labelName="End Date:" fieldType="date" showForm={showForm} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary addButton" onClick={this.addClick}>Remove</button>
                    </div>
                </form>
                </div>
            );
        };   
    }; 
}




export default Experience