import React from 'react'
import IdleTimer from 'react-idle-timer'
import {Component} from "react/cjs/react.production.min";

export default class InactivityTimer extends Component {
    constructor(props) {
        super(props)
        this.idleTimer = null
        this.handleOnAction = this.handleOnAction.bind(this)
        this.handleOnActive = this.handleOnActive.bind(this)
        this.handleOnIdle = this.handleOnIdle.bind(this)
    }

    render() {
        return (
            <div>
                <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    timeout={1000 * 5 * 15}
                    onActive={this.handleOnActive}
                    onIdle={this.handleOnIdle}
                    onAction={this.handleOnAction}
                    debounce={250}
                />
            </div>
        )
    }

    handleOnAction (event) {
        console.log('user did something', event)
        this.idleTimer.reset()
    }

    handleOnActive (event) {
        console.log('user is active', event)
        console.log('time remaining', this.idleTimer.getRemainingTime())
    }

    handleOnIdle (event) {
        console.log('user is idle', event)
        console.log('last active', this.idleTimer.getLastActiveTime())
        console.log("call user log out function.")
    }
}


