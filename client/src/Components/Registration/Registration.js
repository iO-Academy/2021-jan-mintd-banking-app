import React from 'react'
import UserContext from "../UserContext";
import ActionButton from "../ActionButton/ActionButton";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import TextInputBox from "../TextInputBox/TextInputBox";
import {Link} from "react-router-dom";

class Registration extends React.Component{

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
            }
        )}

    customerNumberInput = (e) => {
        let customerNumber = e.target.value
        this.setState ({
            customerNumber: customerNumber
            }
        )}

    render(){
        return(
            <div className="content-container">
                <Logo />

                <Title titleText={"Registration"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={'text'} change={(e) => this.nameInput(e)} placeholder={'name'} />
                    <TextInputBox type={'text'} change={(e) => this.customerNumberInput(e)} placeholder={'1234-5678-9999'} />
                </div>
                <UserContext.Provider value={{isRegistered: this.state.isRegistered, username: this.state.username, customerNumber: this.state.customerNumber}}>
                    <Link to={'/create-pass-code'}>
                        <ActionButton btnText={"next"}></ActionButton>
                    </Link>
                </UserContext.Provider>
            </div>
        )
    }
}
export default Registration;