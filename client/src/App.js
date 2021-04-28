import React from 'react';
import './App.css';
import UserContext from "./Components/UserContext";

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

  isRegistered(){

    let isRegistered =  document.cookie.registered
    if(isRegistered !== undefined && isRegistered !== null){
      window.location = '/login';
    } else {
      window.location = '/registration';
    }
  }

  //Hardcoded to take params and pass to back end.
  //need to pass user input so can have dynamic params
  callAPIforAccount() {
    //this is fetching from the getAccountByName page in api/routes
    fetch("http://localhost:9000/getAccountByCustomerNumber/012345678911")
        .then(res => res.text())
        .then(res => this.setState({ getAccountResponse: res }));
  }


  
  componentDidMount() {
    this.callAPIforAccount()
  }

  render(){
    return(
          <div>
            {this.isRegistered()}
          </div>
    )
  }

}
export default App;
