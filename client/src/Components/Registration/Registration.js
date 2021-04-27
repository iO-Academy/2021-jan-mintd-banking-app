import React from 'react'
import UserContext from "../UserContext";
import ActionButton from "../ActionButton/ActionButton";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import TextInputBox from "../TextInputBox/TextInputBox";
class Registration extends React.Component{

    render(){
        return(
            <div className="content-container">
                <Logo />
                <UserContext.Consumer>
                    {({isRegistered}) => <p>{isRegistered}</p>}
                </UserContext.Consumer>
                <Title titleText={"Registration"} />
                <div className={'auth-inputs-container'}>
                    <TextInputBox placeholder={'name'} />
                    <TextInputBox placeholder={'1234-5678-9999'} />
                </div>
                <ActionButton btnText={"next"} />
            </div>
        )
    }
}
export default Registration;