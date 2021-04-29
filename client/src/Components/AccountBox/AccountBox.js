import React from "react";
import {Link} from "react-router-dom";

class AccountBox extends React.Component {

    render() {
        return (
            <div className='account-box'>
                <div className="account-info">
                    <div><p>#{this.props.accNo}</p></div>
                    <div><p>£{this.props.accBal}</p></div>
                </div>
                <div className="account-label">
                    <div><p>{this.props.accLabel}</p></div>
                </div>
                <div className="account-type-delete">
                    <div><p>{this.props.accType}</p></div>
                    <Link to={'/close-account'}>
                        <div><img className="red-x-icon" src='/red-x-icon.png'/></div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AccountBox