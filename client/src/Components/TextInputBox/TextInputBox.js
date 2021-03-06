import React from "react";

class TextInputBox extends React.Component {

    render() {

        return (
            <input type={this.props.type} onKeyUp={this.props.keyup} onChange={this.props.change} placeholder={this.props.placeholder}/>
        )
    }
}

export default TextInputBox;