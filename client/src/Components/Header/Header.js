import React from 'react'
import {Link} from "react-router-dom";
import InactivityTimer from "../InacctivityTimer/InnactivityTimer";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
              <InactivityTimer/>
                <Link to={'/main-accounts'}>
                    <img className="header-icon" src='/mintd-icon.png'/>
                </Link>
                <Link to={this.props.utilLink}>
                    <img className="header-icon" src={this.props.src} />
                </Link>
            </div>
        )
    }
}

export default Header