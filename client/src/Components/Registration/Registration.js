import React from 'react'
import UserContext from "../UserContext";
import ActionButton from "../ActionButton/ActionButton";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import TextInputBox from "../TextInputBox/TextInputBox";
import {Link} from "react-router-dom";

class Registration extends React.Component{
    sessionStorage = window.sessionStorage
    sessionStorage = window.sessionStorage

    constructor(props) {

        super(props);
        this.state = {
            isRegistered: false,
            username: '',
            customerNumber: ''
        }
    }

    nameInput = (e) => {
        let username = e.target.value
        this.setState ({
            username: username
        })
        this.sessionStorage.setItem("username", username)
    }

    customerNumberInput = (e) => {
        let customerNumber = e.target.value
        this.setState ({
            customerNumber: customerNumber
        })
        this.sessionStorage.setItem("customerNumber", customerNumber)
    }

    render(){
        return(
            <div className="content-container">
                <Logo />
                <Title titleText={"Registration"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={'text'} change={(e) => this.nameInput(e)} placeholder={'name'} />
                    <TextInputBox type={'text'} change={(e) => this.customerNumberInput(e)} placeholder={'1234-5678-9999'} />
                </div>
                    <Link to={'/create-pass-code'}>
                        <ActionButton btnText={"next"}></ActionButton>
                    </Link>
            </div>
        )
    }
}
export default Registration;


