import React from "react";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import TextInputBox from "../TextInputBox/TextInputBox";
import UserContext from "../UserContext";
import {Link, Redirect} from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";

class CreatePassCode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstPassCode: '',
            secondPassCode: '',
            passCode: '',
            link: "/create-pass-code",
            username: sessionStorage.getItem("username"),
            customerNumber: sessionStorage.getItem("customerNumber"),
            postResponse: '',
            btnText: 'Enter Valid Passcode',
            }
    }

    firstPassCodeInput = (e) => {
        let firstPassCode = e.target.value
        this.setState ({
            firstPassCode: firstPassCode
            })
    }

    secondPassCodeInputValidation = (e) => {
        let secondPassCode = e.target.value
        this.setState({
            secondPassCode: secondPassCode
        })

        let firstPassCode = this.state.firstPassCode;
        const isSixDigits = /^[0-9]{6}$/
        
        if (isSixDigits.test(firstPassCode)
            && isSixDigits.test(secondPassCode)
            && firstPassCode === secondPassCode
        ) {
            this.setState({
                passcode: firstPassCode,
                btnText: 'Register',
                link: '/main-accounts'
            })
        } else if (firstPassCode !== secondPassCode && secondPassCode.length === 6){
            return alert('Passcodes do not match')
        } else if(firstPassCode >6 || secondPassCode >6 || firstPassCode <6 || secondPassCode <6){
            this.setState({
                btnText: 'Enter Valid Passcode',
            })
        }
    }

    updateUsername = () => {
        let newName = this.props.username
        this.setState({
            username: newName
        })
    }

    setCookie() {
        document.cookie = 'isRegistered=true'
    }

    // allCookies = document.cookie

    //POST TEMPLATE//
    //Create NEW CUSTOMER
    accountNumberGenerator = Math.floor(Math.random() * 100000000)
    dateCreated = new Date().toLocaleDateString()
    timeCreated = new Date().toLocaleTimeString()

    //POST ROUTE
    postToAPI = () => {
        this.setCookie()

        const template = {
            "customerNumber": this.state.customerNumber,
            "username": this.state.username,
            "email": "",
            "passcode": this.state.passcode,
            "accountsArray" : [
                {
                    "account": {
                        "accountNumber": this.accountNumberGenerator,
                        "accountType": "CurrentAccount",
                        "balance": 150,
                        "accountLabel": "CurrentAccount",
                        "canWithdraw": true,
                        "transactionHistory": [{
                            "transactionId": 1,
                            "time": this.timeCreated,
                            "date": this.dateCreated,
                            "amount": 150,
                            "from": "Mintd joining gift.",
                            "to": this.state.username
                        }]
                    }
                }]
        }

        fetch("http://localhost:9000/newAccount", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(template)
        })
            .then(res => res.json())
            .then(res => this.setState({ postResponse: res })
            )
    }

    render(){
        return(
            <div className="content-container">
                <Logo />
                <Title titleText={"Create Your Passcode"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"password"} change={(e) => this.firstPassCodeInput(e)} placeholder={'create 6 digit passcode'} />
                    <TextInputBox type={"password"} keyup={(e) => this.secondPassCodeInputValidation(e)} placeholder={'re-enter 6 digit passcode'} />
                </div>
                    <Link to={this.state.link}>
                        <ActionButton click={() => this.postToAPI()} btnText={'Register'} />
                    </Link>
            </div>
        )
    }
}

export default CreatePassCode
