import React from "react"

class NewUserTemplate extends React.Component {

    accountNumberGenerator = Math.floor(Math.random() * 10000000)
    dateCreated = new Date().toLocaleDateString()
    timeCreated = new Date().toLocaleTimeString()

    template = {
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

    // checkDataInput = () => {
    //     if ()
    // }

    preparePost = () => {
        return this.template
    }

    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            username: '',
            customerNumber: '',
            passcode: ''
        }
    }

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

    render() {
        return (
           this.postToAPI()
        )
    }

}