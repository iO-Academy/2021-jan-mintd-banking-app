import React from "react";

class AccountBox extends React.Component {
    render() {
        return (
            <div className='account-box'>
                <div className="account-info">
                    <div><p>#17374714</p></div>
                    <div><p>£150.00</p></div>
                </div>
                <div className="account-label">
                    <div><p>Main Account</p></div>
                </div>
                <div className="account-type-delete">
                    <div><p>Current Account [primary]</p></div>
                    <div><img className="red-x-icon" src='/red-x-icon.png'/></div>
                </div>
            </div>
        );
    }
}

export default AccountBox