import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
    }
  }

  isRegistered(){
    let isRegistered = document.cookie
    if(isRegistered === 'isRegistered=true' && isRegistered !== undefined && isRegistered !== null){
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
