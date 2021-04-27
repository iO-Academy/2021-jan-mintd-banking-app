import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      getAccountResponse: "",
      apiResponse: "",
      isRegistered: false,
      isLoggedIn: 'hello'
    }
  }

  //Hardcoded to take params and pass to back end.
  //need to pass user input so can have dynamic params
  callAPI() {
    //this is fetching from the dbHandler page in api/routes
    fetch("http://localhost:9000/dbHandler/100001")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  callAPIforAccount() {
    //this is fetching from the getAccountByName page in api/routes
    fetch("http://localhost:9000/getAccountByName")
        .then(res => res.text())
        .then(res => this.setState({ getAccountResponse: res }));
  }



  componentDidMount() {
    this.callAPI()
    this.callAPIforAccount()
  }

  render(){
    return (
        <div>

            <h1>Damien is the best</h1>
            <p>{this.state.apiResponse}</p>
            <p>{this.state.getAccountResponse}</p>

        </div>
    );
  }
}
export default App;