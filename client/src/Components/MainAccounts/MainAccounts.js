import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import TextInputBox from "../TextInputBox/TextInputBox";
import UserContext from "../UserContext";
import {Link} from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";
import AccountBox from "../AccountBox/AccountBox";

class MainAccounts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
                utilitySrc: '/menu-icon.png',
                name:"dadad"

        }
    }







    data = [{
        "_id": {
            "$oid": "6086c606e818eff966ac703c"
        },
        "customerNumber": "012345678910",
        "username": "Test Entry",
        "email": "test@test.com",
        "passcode": 123456,
        "accountsArray": [
            {
                "account": {
                    "accountNumber": 100001,
                    "accountType": "Current Account",
                    "balance": 150.52,
                    "accountLabel": "Main Account",
                    "canWithdraw": true,
                    "transactionHistory": [
                        {
                            "transactionId": 1,
                            "time": "13:30:33",
                            "date": "26/04/2021",
                            "amount": 150.00,
                            "from": "Mintd joining gift.",
                            "to": "Name: Account"
                        }
                    ]
                }
            },
            {
                "account": {
                    "accountNumber": 100001,
                    "accountType": "Test Account",
                    "balance": 250.00,
                    "accountLabel": "Test Account",
                    "canWithdraw": true,
                    "transactionHistory": [
                        {
                            "transactionId": 1,
                            "time": "13:30:33",
                            "date": "26/04/2021",
                            "amount": 250.00,
                            "from": "Mintd joining gift.",
                            "to": "Name: Account"
                        }
                    ]
                }
            }
        ]
    },
{
    "_id": {
        "$oid": "6087d13fe818eff966ac703d"
    },
    "customerNumber": "012345678911",
    "username": "Lord Berbidge",
    "email": "lizard@rich.com",
    "passcode": 666666,
    "accounts": [
        {
            "standardAccount": {
                "accountNumber": 166666661,
                "accountType": "Savers Account",
                "balance": 150,
                "accountLabel": "BasicAccount",
                "canWithdraw": true,
                "transactionHistory": [
                    {
                        "transactionId": 1,
                        "time": "13:30:33",
                        "date": "26/04/2021",
                        "amount": 150,
                        "from": "Mintd joining gift.",
                        "to": "Lord Berbidge: 166666661"
                    }
                ]
            }
        }
    ]
},{
    "_id": {
        "$oid": "60883bec892eed6ac78dcb7c"
    },
    "customerNumber": "012345678911",
        "username": "CthuluKitteh",
        "email": "great@old.one",
        "passcode": 999666,
        "accounts": [
        {
            "standardAccount": {
                "accountNumber": 123456,
                "accountType": "Current Account",
                "balance": 150,
                "accountLabel": "BasicAccount",
                "canWithdraw": true,
                "transactionHistory": [
                    {
                        "transactionId": 1,
                        "time": "17:01:33",
                        "date": "27/04/2021",
                        "amount": 150,
                        "from": "Mintd joining gift.",
                        "to": "CthuluKitteh: 123456"
                    }
                ]
            }
        }
    ]
}]

    accountBoxPopulator = () => {
        let accountsArray = this.data[0].accountsArray
        let accountBoxesList = accountsArray.map(function (accData){
            return <AccountBox accNo={accData.account.accountNumber} accBal={accData.account.balance} accLabel={accData.account.accountLabel} accType={accData.account.accountType}/>
        })
        return accountBoxesList
    }

    render() {
        return(
            <div className="content-container">
                <Header src={this.state.utilitySrc} />
                <Title titleText={"Accounts"} />

                <div className={'accounts-container'}>
                    {this.accountBoxPopulator()}
                </div>

                <Link to={'/create-pass-code'}>
                    <ActionButton btnText={"logout"}></ActionButton>
                </Link>

            </div>
        )
    }
}


export default MainAccounts