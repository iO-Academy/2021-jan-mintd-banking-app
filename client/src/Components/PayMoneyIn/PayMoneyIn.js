import React from 'react'
import Title from "../Title/Title";
import TextInputBox from "../TextInputBox/TextInputBox";
import {Link} from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";
import Header from "../Header/Header";

class PayMoneyIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            accountNumber: '',
            customerNumber: ''
        }
    }

    amountInput = (e) => {
        let amount = e.target.value
        console.log(amount)
        // sessionStorage.setItem("amountSent", amount)
        document.cookie = 'amount=' + amount
    }

    accountNumberInput = (e) => {
        let accountNumber = e.target.value
        console.log(accountNumber)
        // sessionStorage.setItem("accountNumber", accountNumber)
        // document.cookie = 'accountNumber=' + accountNumber

    }

    customerNumberInput = (e) => {
        let customerNumber = e.target.value
        console.log(customerNumber)
        // sessionStorage.setItem("customerNumber", customerNumber)
        document.cookie = 'customerNumber=' + customerNumber
    }

    updateFunds = () => {

        let getRoute = "http://localhost:9000/pay/" + sessionStorage.getItem('accountNumber')
        fetch(getRoute)
            .then(res => res.json())
            .then(res => console.log(res));
    }

    // splitter(){
    //     document.cookie.split('; ').reduce((prev, current) => {
    //         const [name, ...value] = current.split('=');
    //         prev[name] = value.join('=');
    //         console.log(prev.accountNumber)
    //         return prev;
    //     }, {});
    // }

    render() {
        return (
            <div className="content-container">
                <Header />
                <Title titleText={"Pay Money In"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox type={"text"} keyup={(e) => this.amountInput(e)} placeholder='amount' />
                    <TextInputBox type={"text"} keyup={(e) => this.accountNumberInput(e)} placeholder='account number' />
                    <TextInputBox type={"text"} keyup={(e) => this.customerNumberInput(e)} placeholder='customer number' />
                </div>
                <Link to={'/main-accounts'}>
                    <ActionButton click={this.updateFunds} btnText={"Confirm payment"} />
                </Link>
                {/*<div>*/}
                {/*    {this.splitter()}*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default PayMoneyIn