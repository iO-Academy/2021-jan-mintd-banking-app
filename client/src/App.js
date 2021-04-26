import React from 'react';
import './App.css';
import UserContext from "./Components/UserContext";
import Registration from "./Components/Registration/Registration";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      isLoggedIn: 'hello'
    }
  }
  render(){
    return (
        <div>
          <UserContext.Provider value={{isLoggedIn: this.state.isLoggedIn, isRegistered: this.state.isRegistered}}>
            <h1>Damien is the best</h1>
            <Registration />
          </UserContext.Provider>
        </div>
    );
  }
}
export default App;