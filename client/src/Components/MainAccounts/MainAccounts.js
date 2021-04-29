import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import {Link} from "react-router-dom";
import ActionButton from "../ActionButton/ActionButton";
import AccountBox from "../AccountBox/AccountBox";
// import BeatLoader from "react-spinners/ClipLoader";

class MainAccounts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
                utilitySrc: '/menu-icon.png',
                name:"dadad",
                username: sessionStorage.getItem("username"),
                // customerNumber: sessionStorage.getItem("customerNumber"),
                customerNumber: "012345678910",
                getAccountResponse: "",
        }
    }

    componentWillUnmount() {
        //need to unmount this callAPIforAccount
    }

    accountBoxPopulator = () => {
        let data = this.state.getAccountResponse.accountsArray
        let accountBoxesList = data.map(function (accData){
            return <AccountBox accNo={accData.account.accountNumber} accBal={accData.account.balance} accLabel={accData.account.accountLabel} accType={accData.account.accountType}/>
        })
        return accountBoxesList
    }

    callAPIforAccount() {
        //this is fetching from the getAccountByName page in api/routes
          fetch("http://localhost:9000/getAccountByCustomerNumber/012345678910")
            .then(res => res.json())
            .then(res => this.setState({ getAccountResponse: res }));
    }

    componentDidMount() {
        setTimeout(function (){} ,5000)
        this.callAPIforAccount()
    }


    render() {

        if(this.state.getAccountResponse === ""){
            return (
                <div></div>
                // <div id={'loader'}>
                //     <BeatLoader />
                // </div>
            )
        } else {
            return(
                <div className="content-container">
                    <Link to={'/menu'}>
                        <Header src={this.state.utilitySrc} />
                    </Link>
                    <Title titleText={"Accounts"} />

                    <div className={'accounts-container'}>
                        {this.accountBoxPopulator()}
                    </div>

                    <Link to={'/login'}>
                        <ActionButton btnText={"logout"}></ActionButton>
                    </Link>

                </div>
            )
        }
    }
}

export default MainAccounts