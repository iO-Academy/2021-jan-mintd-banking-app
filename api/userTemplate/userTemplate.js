var express = require('express');
const app = express();
const jsonParser = express.json();


//basic structure for new customer

let newUserTemplate = {
    "customerNumber": "",
    "username": "",
    "email": "",
    "passcode": "",
    "accounts" : [
        {
            "standardAccount": {
            "accountNumber": "",
            "balance": 150,
            "accountLabel": "BasicAccount",
            "canWithdraw": true,
            "transactionHistory": [{
                "transactionId": 1,
                "time": "",
                "date": "",
                "amount": 150,
                "from": "Mintd joining gift.",
                "to": ""
                }]
            }
        }]
}


export default newUserTemplate