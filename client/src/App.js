import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      getAccountResponse: "",
      apiResponse: "",
      postResponse: "",
      isRegistered: false,
      isLoggedIn: 'hello'
    }
  }

  //Hardcoded to take params and pass to back end.
  //need to pass user input so can have dynamic params
/*  callAPI() {
    //this is fetching from the dbHandler page in api/routes
    fetch("http://localhost:9000/dbHandler/100001")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }*/
  callAPI() {
    //this is fetching from the dbHandler page in api/routes
    fetch("http://localhost:9000/dbHandler/012345678910")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  callAPIforAccount() {
    //this is fetching from the getAccountByName page in api/routes
    fetch("http://localhost:9000/getAccountByCustomerNumber/012345678911")
        .then(res => res.text())
        .then(res => this.setState({ getAccountResponse: res }));
  }

  postToAPI() {
    fetch("http://localhost:9000/newAcount")
        .then(res => res.text())
        .then(res => this.setState({ postResponse: res }));
  }




  componentDidMount() {
    this.callAPI()
    this.callAPIforAccount()
  }

  render(){
    return (
        <div>

            <h1>Damien is the best</h1>
            <p>This is the API response {this.state.apiResponse}</p>
            <br />
            <p>this is getAccount response {this.state.getAccountResponse}</p>

        </div>
    );
  }
}
export default App;