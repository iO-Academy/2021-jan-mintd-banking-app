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
            username: 'test',
            getAccountResponse: '',
        }
    }

    componentDidMount(){
        sessionStorage.clear()
    }

    callAPIforAccount = (customerNumber) => {
        //this is fetching from the getAccountByName page in api/routes
        let getRoute = "http://localhost:9000/getAccountByCustomerNumber/" + customerNumber
        fetch(getRoute)
            .then(res => res.json())
            .then(res => this.setState({ getAccountResponse: res}));
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
                customerNumber: this.state.customerNumber,
                passcode: this.state.passcode,
                btnText: 'Login',
            })
            this.validateUserDetails()
        } else {
            alert('Your Details are Incorrect')
            console.log(first)
            console.log(second)
        }
    }

        // customerNumber = 123456789012
        // passcode = 111111
    validateUserDetails() {
        let dbCustomerNumber = this.state.getAccountResponse.customerNumber
        let dbCustomerPasscode = this.state.getAccountResponse.passcode
        let enteredCustomerNumber = this.state.customerNumber
        let enteredCustomerPasscode = this.state.passcode

        if(dbCustomerNumber === enteredCustomerNumber && dbCustomerPasscode === enteredCustomerPasscode){
            sessionStorage.setItem('customerNumber', dbCustomerNumber)
            this.setState({
                link: '/main-accounts'
            })
            console.log('details correct')
        } else {
            alert('Details are Incorrect, please try again')
        }
    }

    customerNumberInput = (e) => {
        let customerNumber = e.target.value
        const isTwelveDigits = /^[0-9]{12}$/
        if(isTwelveDigits.test(customerNumber)){
                this.callAPIforAccount(customerNumber)
            this.setState ({
                    customerNumber: customerNumber
                }
            )
            }
        }

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

                <Title titleText={"Welcome Back " + this.state.username} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"username"} keyup={(e) => this.customerNumberInput(e)} placeholder='1234-5678-9999' />
                    <TextInputBox type={"password"} change={(e) => this.passCodeInput(e)} placeholder={'Enter your 6 digit passcode'} />
                </div>
                <Link to={this.state.link}>
                    <ActionButton click={() => this.validateLogin()} btnText={this.state.btnText} />
                </Link>
            </div>
        )
    }
}

export default Login