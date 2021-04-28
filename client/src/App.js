import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
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
