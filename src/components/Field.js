import React, { Component } from "react"

class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {
        fieldName: '',
        labelName: '',
        fieldValue: '',
        fieldType: 'text',
        showForm: true
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange = (e) => {
        this.setState({
            fieldValue: e.target.value
        });
    };


    render() {
        const { fieldName, labelName, fieldType, showForm } = this.props;

        if (showForm) {
        return (
            <div className="field">
                <label htmlFor={fieldName}>{labelName}</label>
                <input
                    name={fieldName}
                    onChange={this.handleChange}
                    type={fieldType}
                    value={this.state.fieldValue}
                    id={fieldName}
                    className="form-control"
                />
            </div>
        );
        } else {
            return (
            <div className="field">
                <label htmlFor={fieldName}>{labelName}</label>
                <div>{this.state.fieldValue}</div>
            </div>
            );
        };
    };
}

export default Field