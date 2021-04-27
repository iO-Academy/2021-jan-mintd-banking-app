import React from "react";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import ActionButton from "../ActionButton/ActionButton";

class NotFound extends React.Component {

    render() {
        return (
            <div className="content-container">
                <Logo />
                <Title titleText={"404 - Not Found"} />
                <ActionButton className="notFoundBtn" btnText={"login"} />
            </div>
        )
    }

}

export default NotFound