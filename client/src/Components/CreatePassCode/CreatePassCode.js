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
            firstPassCode: '',
            secondPassCode: '',
            passCode: '',
            btnText: 'Enter Valid Passcode',
            link: '/create-pass-code',
            username: ''
        }
    }

    firstPassCodeInput = (e) => {
        let firstPassCode = e.target.value
        this.setState ({
            firstPassCode: firstPassCode
            }
        )}

    secondPassCodeInput = (e) => {
        let secondPassCode = e.target.value
        this.setState ({
            secondPassCode: secondPassCode
            }
        )}

    // s2t3 woops
    validatePassCode(){
        let first = this.state.firstPassCode;
        let second = this.state.secondPassCode;
        first === second ? this.setState({
            passcode: first,
            btnText: 'Register',
            link: '/main-accounts'
        }) : alert('Passcodes do not match');
    }


    render(){
        return(
            <div className="content-container">
                <Logo />

                <Title titleText={"Create Your Passcode"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"password"} change={(e) => this.firstPassCodeInput(e)} placeholder={'create 6 digit passcode'} />
                    <TextInputBox type={"password"} change={(e) => this.secondPassCodeInput(e)} placeholder={'re-enter 6 digit passcode'} />
                </div>
                <UserContext.Provider value={{isRegistered: this.state.isRegistered, username: this.state.username, customerNumber: this.state.customerNumber}}>
                    <Link to={this.state.link}>
                        <ActionButton click={() => this.validatePassCode()} btnText={this.state.btnText}></ActionButton>
                    </Link>
                </UserContext.Provider>
            </div>
        )
    }
}

export default CreatePassCode