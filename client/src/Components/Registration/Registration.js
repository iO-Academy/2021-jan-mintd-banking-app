import React from 'react'
import UserContext from "../UserContext";
import MyButton from '../Button/MyButton'
class Registration extends React.Component{
    //constructor state
    constructor(props){
        super(props);
        this.state = {
            text: 'next'
        }
    }
    render(){
        return(
            <div>
                <UserContext.Consumer>
                    {({isLoggedIn}) => <p>{isLoggedIn}</p>}
                    <MyButton text={this.state.next} />
                </UserContext.Consumer>
            </div>
        )
    }
}
export default Registration;