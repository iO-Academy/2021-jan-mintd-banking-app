import React from "react";
import {Link} from "react-router-dom";

class ActionButton extends React.Component {

    render() {
        return (
                <button onClick={this.props.click} className={'action-btn'}>{this.props.btnText}</button>
        )
    }
}

export default ActionButton