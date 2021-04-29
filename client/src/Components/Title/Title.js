import React from "react";

class Title extends React.Component {

    render() {
        return (
            <h1 className="title">{this.props.titleText}</h1>
        )
    }
}

export default Title