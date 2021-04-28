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

// {
//     "_id": {
//         "$oid": "6086c606e818eff966ac703c"
//     },
//     "Customer Number":"012345678910",
//     "Name":"Test Entry",
//     "Email":"test@test.com",
//     "Passcode":123456,
//     "Accounts":[
//         {
//             "Standard Account":{
//                 "Account Number":100001,
//                 "Balance":0,
//                 "Account Label":"Main Account",
//                 "Can Withdraw":true,
//                 "Transaction History":[
//                     {
//                         "Transaction ID":1,
//                         "Time":"13:30:33",
//                         "Date":"26/04/2021",
//                         "Amount":150,
//                         "From":"Mintd joining gift.",
//                         "To":"Name: Account"
//                     }
//                 ]
//             }
//         }]
// }

    render() {
        return(
            <div className="content-container">
                <Header src={this.state.utilitySrc} />

                <Title titleText={"Accounts"} />
                <div className={'accounts-container'}>
                    <AccountBox />
                    <AccountBox />
                    <AccountBox />
                </div>
                <UserContext.Provider value={{isRegistered: this.state.isRegistered, username: this.state.username, customerNumber: this.state.customerNumber}}>
                    <Link to={'/create-pass-code'}>
                        <ActionButton btnText={"logout"}></ActionButton>
                    </Link>
                </UserContext.Provider>
            </div>
        )
    }
}

export default MainAccounts