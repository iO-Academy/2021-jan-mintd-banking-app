import React from 'react';
import './App.css';
import UserContext from "./Components/UserContext";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
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

  render(){
    return(
          <div>
            {this.isRegistered()}
          </div>
    )
  }

}
export default App;

// <Link to={'/registration'}></Link>
