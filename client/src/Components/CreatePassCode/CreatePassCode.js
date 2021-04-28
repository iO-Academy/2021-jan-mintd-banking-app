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
            link: '/create-pass-code'
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

    updateUsername = () => {
        let newName = this.props.username
        this.setState({
            username: newName
        })
    }


    // s2t3 woops
    validatePassCode(){
        let first = this.state.firstPassCode;
        let second = this.state.secondPassCode;
        if(first === second) {
            this.setState({
                passcode: first,
                btnText: 'Register',
                link: '/main-accounts'})
            this.postToAPI(this.template)
        } else {
            alert('Passcodes do not match');
        }
    }

    //POST TEMPLATE//
    //Create NEW CUSTOMER
    accountNumberGenerator = Math.floor(Math.random() * 10000000)
    dateCreated = new Date().toLocaleDateString()
    timeCreated = new Date().toLocaleTimeString()


    //POST ROUTE
    postToAPI() {
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
                    <TextInputBox type={"password"} change={(e) => this.secondPassCodeInput(e)} placeholder={'re-enter 6 digit passcode'} />
                </div>
                    <Link to={this.state.link}>
                        <ActionButton click={() => {this.validatePassCode()}} btnText={this.state.btnText} />
                    </Link>
            </div>
        )
    }
}

export default CreatePassCode