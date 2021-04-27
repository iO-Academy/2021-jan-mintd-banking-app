import React from "react";
class TextInputBox extends React.Component {
    render() {
        return (
            <input type="text" placeholder={this.props.placeholder}/>
        )
    }
}
export default TextInputBox;