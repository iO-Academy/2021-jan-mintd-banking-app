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

    accountBoxPopulator = () => {
        for (let accData of this.data.accounts) {
            console.log(accData);
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
        "accounts": [
            {
                "standardAccount": {
                    "accountNumber": 100001,
                    "balance": 150,
                    "accountLabel": "Main Account",
                    "canWithdraw": true,
                    "transactionHistory": [
                        {
                            "transactionId": 1,
                            "time": "13:30:33",
                            "date": "26/04/2021",
                            "amount": 150,
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


    render() {
        return(
            <div className="content-container">
                <Header src={this.state.utilitySrc} />

                <Title titleText={"Accounts"} />
                <userContext.consumer>
                    {/*{({isLoggedIn}) =>*/}




                    <div className={'accounts-container'}>
                    {this.accountBoxPopulator()}

                </div>
                    }
                </userContext.consumer>


                    <Link to={'/create-pass-code'}>
                        <ActionButton btnText={"logout"}></ActionButton>
                    </Link>

            </div>
        )
    }
}


export default MainAccounts