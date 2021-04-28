import React from 'react'

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img className="header-icon" src='/mintd-icon.png'/>
                <img className="header-icon" src={this.props.src} />
            </div>
        )
    }
}

export default Header