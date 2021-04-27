import React from "react";
class TextInputBox extends React.Component {
    render() {
        return (
            <input onChange={this.props.change} type="text" placeholder={this.props.placeholder}/>
        )
    }
}
export default TextInputBox;