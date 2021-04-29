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
            username: sessionStorage.getItem("username"),
            customerNumber: sessionStorage.getItem("customerNumber"),
            postResponse: '',
            btnText: 'Enter Valid Passcode',
            link: '/create-pass-code',
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
        this.setState({
            secondPassCode: secondPassCode
        })

        //do validation here for passcodes
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


    validateFormat() {
            this.setCookieWelcome()
            this.setCookie()

            // Post to DB
            return this.postToAPI()
    }

    setCookie() {
        document.cookie = 'isRegistered=true'
    }
    setCookieWelcome() {
        document.cookie = 'username=' + this.state.username
    }

    // allCookies = document.cookie


    //POST TEMPLATE//
    //Create NEW CUSTOMER
    accountNumberGenerator = Math.floor(Math.random() * 100000000)
    dateCreated = new Date().toLocaleDateString()
    timeCreated = new Date().toLocaleTimeString()


    //POST ROUTE
    postToAPI = () => {
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
                {/*<p>{this.allCookies}</p>*/}
                <Logo />
                <Title titleText={"Create Your Passcode"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"password"} change={(e) => this.firstPassCodeInput(e)} placeholder={'create 6 digit passcode'} />
                    <TextInputBox type={"password"} keyup={(e) => this.secondPassCodeInput(e)} placeholder={'re-enter 6 digit passcode'} />
                </div>
                    <Link to={this.state.link}>
                        <ActionButton click={() => this.validateFormat()} btnText={this.state.btnText} />

                    </Link>
            </div>
        )
    }
}

export default CreatePassCode