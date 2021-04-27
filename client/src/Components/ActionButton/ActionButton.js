import React from "react";

class ActionButton extends React.Component {

    render() {
        return (
                <button className={'action-btn'}>{this.props.btnText}</button>
        )
    }
}

export default ActionButton