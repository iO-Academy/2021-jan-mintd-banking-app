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

    validateFormat() {
        const isSixDigits = /^[0-9]{6}$/
        let first = this.state.firstPassCode;
        let second = this.state.secondPassCode;

        if(isSixDigits.test(first)
            && isSixDigits.test(second)
            && first === second
        ){
           this.setState({
                passcode: first,
                btnText: 'Register',
                link: '/main-accounts'
            })
            // force re-render
            this.setCookieWelcome()
            this.setCookie()
        } else {
            alert('Passcodes do not match')
        }
    }

    setCookie() {
        document.cookie = 'isRegistered=true'
    }
    setCookieWelcome() {
        document.cookie = 'username=' + this.state.username
    }

    // allCookies = document.cookie

    render(){
        return(
            <div className="content-container">
                {/*<p>{this.allCookies}</p>*/}
                <Logo />
                <Title titleText={"Create Your Passcode"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"password"} change={(e) => this.firstPassCodeInput(e)} placeholder={'create 6 digit passcode'} />
                    <TextInputBox type={"password"} change={(e) => this.secondPassCodeInput(e)} placeholder={'re-enter 6 digit passcode'} />
                </div>
                <UserContext.Provider value={{isRegistered: this.state.isRegistered, username: this.state.username, customerNumber: this.state.customerNumber}}>
                    <Link to={this.state.link}>
                        <ActionButton click={() => this.validateFormat()} btnText={this.state.btnText}></ActionButton>
                    </Link>
                </UserContext.Provider>
            </div>
        )
    }
}

export default CreatePassCode