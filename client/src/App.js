import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getAccountResponse: "",
      postResponse: "",
      isRegistered: false,
      isLoggedIn: 'hello'
    }
  }

  // change line 15 to search ONLY registered cookie so isRegistered only refers to is|Registered=true cookie
  isRegistered(){
    let isRegistered = document.cookie
    if(isRegistered === 'isRegistered=true; username=test' && isRegistered !== undefined && isRegistered !== null){
      return <Redirect to={'/login'} />
    } else {
      return <Redirect to={'/registration'} />
    }
  }

  //Hardcoded to take params and pass to back end.
  //need to pass user input so can have dynamic params
  // callAPIforAccount() {
  //   //this is fetching from the getAccountByName page in api/routes
  //   fetch("http://localhost:9000/getAccountByCustomerNumber/012345678911")
  //       .then(res => res.text())
  //       .then(res => this.setState({ getAccountResponse: res }));
  // }

  // componentDidMount() {
  //   this.callAPIforAccount()
  // }

  render(){
    return(
          <div>
            {this.isRegistered()}
          </div>
    )
  }

}
export default App;
