import React, { Component } from "react"

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showForm: true
    };
  };

    render() {
        const { showForm } = this.props;

        if (showForm) {
        return (
            <div className="buttonGroup">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        );
        } else {
            return (
            <div className="buttonGroup">
                <button type="submit" className="btn btn-primary">Edit</button>
            </div>
            );
        };
    };
}

export default Buttons