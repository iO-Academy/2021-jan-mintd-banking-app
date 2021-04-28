var express = require('express');
const app = express();
const jsonParser = express.json();


//basic structure for new customer

let userTemplate = {
    "customerNumber": "",
    "username": "",
    "email": "",
    "passcode": "",
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
}


export default userTemplate