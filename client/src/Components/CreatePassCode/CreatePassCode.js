import React from "react";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import TextInputBox from "../TextInputBox/TextInputBox";
import UserContext from "../UserContext";
import {Link} from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";

class CreatePassCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passCode: ''
        }
    }

    validatePasscode(){

    }

    render(){
        return(
            <div className="content-container">
                <Logo />

                <Title titleText={"Create Your Passcode"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox change={(e) => this.nameInput(e)} placeholder={'create 6 digit passcode'} />
                    <TextInputBox change={(e) => this.customerNumberInput(e)} placeholder={'re-enter 6 digit passcode'} />
                </div>
                <UserContext.Provider value={{isRegistered: this.state.isRegistered, username: this.state.username, customerNumber: this.state.customerNumber}}>
                    <Link to={'/main-accounts'}>
                        <ActionButton btnText={"register"}></ActionButton>
                    </Link>
                </UserContext.Provider>
            </div>
        )
    }
}

export default CreatePassCode