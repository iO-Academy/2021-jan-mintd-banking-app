import React from 'react'
import UserContext from "../UserContext";
import ActionButton from "../ActionButton/ActionButton";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import TextInputBox from "../TextInputBox/TextInputBox";
import Validation from "../Validation/Validation";

class Registration extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            customerNumber: 1111 - 2222 - 3333
        }
    }

    setUserName = (e) => {
        this.setState({
            userName: e.target.value
        })
    }


    render(){
        return(
            <div className="content-container">
                <Logo />
                <UserContext.Consumer>
                    {({isLoggedIn}) => <p>{isLoggedIn}</p>}
                </UserContext.Consumer>
                <Title titleText={"Registration"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox className="username" placeholder={'name'} change={(e) => this.setUserName(e)}/>
                    <TextInputBox placeholder={'1234-5678-9999'} />
                </div>
                <ActionButton click={Validation.validateUserName(this.state.userName)} btnText={"next"} />
            </div>
        )
    }
}
export default Registration;