import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      isRegistered: false,
      isLoggedIn: 'hello'
    }
  }

  callAPI() {
    //this is fetching from the page we created as testAPI
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI()
  }

  render(){
    return (
        <div>

            <h1>Damien is the best</h1>
            <p>{this.state.apiResponse}</p>

        </div>
    );
  }
}
export default App;