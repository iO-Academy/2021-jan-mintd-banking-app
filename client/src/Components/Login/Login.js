import React from "react";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import TextInputBox from "../TextInputBox/TextInputBox";
import UserContext from "../UserContext";
import {Link} from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";
import Registration from "../Registration/Registration";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerNumber: '',
            passcode: '',
            btnText: 'Enter your details',
            link: '/login',
            username: 'test'
        }
    }

    validateLogin() {
        const isSixDigits = /^[0-9]{6}$/
        const isTwelveDigits = /^[0-9]{12}$/
        let first = this.state.customerNumber;
        let second = this.state.passcode;
        if(isTwelveDigits.test(first)
            && isSixDigits.test(second)
        ){
            this.setState({
                passcode: first,
                btnText: 'Login',
                link: '/main-accounts'
            })
        } else {
            alert('Your Details are Incorrect')
        }
    }

    customerNumberInput = (e) => {
        let customerNumber = e.target.value
        this.setState ({
            customerNumber: customerNumber
            }
        )}

    passCodeInput = (e) => {
        let passcode = e.target.value
        this.setState ({
            passcode: passcode
            }
        )}


    render(){
        return(
            <div className="content-container">
                <Logo />

                <Title titleText={"Login"} />
                <h2 className={'welcome-msg'}>Welcome Back</h2>
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"username"} change={(e) => this.customerNumberInput(e)} placeholder='1234-5678-9999' />
                    <TextInputBox type={"password"} change={(e) => this.passCodeInput(e)} placeholder={'Enter your 6 digit passcode'} />
                </div>
                <UserContext.Provider value={{isRegistered: this.state.isRegistered, username: this.state.username, customerNumber: this.state.customerNumber}}>
                    <Link to={this.state.link}>
                        <ActionButton click={() => this.validateLogin()} btnText={this.state.btnText}></ActionButton>
                    </Link>
                </UserContext.Provider>
            </div>
        )
    }
}

export default Login