import React from "react";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import ActionButton from "../ActionButton/ActionButton";
import {Link} from "react-router-dom";

class NotFound extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            link: '/login'
        }
    }

    render() {
        return (
            <div className="content-container">
                <Logo />
                <Title titleText={"404 - Not Found"} />
                <Link to={this.state.link}>
                    <ActionButton className="notFoundBtn" btnText={"login"} />
                </Link>
            </div>
        )
    }

}

export default NotFound