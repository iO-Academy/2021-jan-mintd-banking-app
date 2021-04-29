import React from "react";

class ActionButton extends React.Component {

    render() {
        return (
                <button onClick={this.props.click} className={'action-btn'}>{this.props.btnText}</button>
        )
    }
}

export default ActionButton