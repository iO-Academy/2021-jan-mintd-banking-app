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
        first === second ? this.setState({
            passcode: first,
            btnText: 'Register',
            link: '/main-accounts'
        }) : alert('Passcodes do not match');
    }

    //POST TEMPLATE//
    //Create NEW CUSTOMER
    accountNumberGenerator = Math.floor(Math.random() * 10000000)
    dateCreated = new Date().toLocaleDateString()
    timeCreated = new Date().toLocaleTimeString()


    preparePost = () => {
        const template = {
            "customerNumber": this.state.customerNumber,
            "username": this.state.username,
            "email": "",
            "passcode": this.state.passcode,
            "accounts" : [
                {
                    "standardAccount": {
                        "accountNumber": this.accountNumberGenerator,
                        "balance": 150,
                        "accountLabel": "MainAccount",
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
        return template
    }

    componentDidMount() {
        this.updateUsername()
        console.log(this.preparePost())

    }

    //POST ROUTE
    postToAPI(data) {
        fetch("http://localhost:9000/newAcount", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.text())
            .then(res => this.setState({ postResponse: res }));
    }

    render(){
        return(
            <div className="content-container">
                <Logo />
                <UserContext.Consumer>
                    {( {username} ) => <p>The current username is {username}</p> }
                </UserContext.Consumer>
                <Title titleText={"Create Your Passcode"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"password"} change={(e) => this.firstPassCodeInput(e)} placeholder={'create 6 digit passcode'} />
                    <TextInputBox type={"password"} change={(e) => this.secondPassCodeInput(e)} placeholder={'re-enter 6 digit passcode'} />
                </div>
                    <Link to={this.state.link}>
                        <ActionButton click={() => {
                            this.validatePassCode()
                        }} btnText={this.state.btnText}></ActionButton>
                    </Link>
            </div>
        )
    }
}

export default CreatePassCode