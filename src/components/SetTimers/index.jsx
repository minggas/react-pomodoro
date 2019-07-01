import React, { Component } from 'react';
import SetTimer from './components/SetTimer';
import PropTypes from 'prop-types';
import './style.css';

class SetTimers extends Component {
    render() {
        const timers = {
            session: {
                id: 'session-length',
                name: 'Session',
                label: 'session-label',
                inc: 'session-increment',
                dec: 'session-decrement',
                value: this.props.sessionTime
            },
            break: {
                id: 'break-length',
                name: 'Break',
                label: 'break-label',
                inc: 'break-increment',
                dec: 'break-decrement',
                value: this.props.breakTime                
            }            
        }
        return (
            <div className="setter">
                <SetTimer values = {timers.session} setTime={this.props.setTime} />
                <SetTimer values = {timers.break} setTime={this.props.setTime} />
            </div>
        )
    }
}

SetTimers.propTypes = {
    sessionTime: PropTypes.number.isRequired,
    breakTime: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired
};

export default SetTimers;