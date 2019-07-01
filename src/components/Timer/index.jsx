import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Timer extends Component {
    render() {
        const secs = this.props.time % 60;
        const mins = Math.floor(this.props.time / 60);
        return (
            <div>
                <div className="timer">
                    <div className="time" id="time-left">
                        {(mins > 9 ? mins : '0' + mins) + ':' + (secs > 9 ? secs : '0' + secs)}
                    </div>
                    <div className="filler"></div>
                </div>
                <p id="timer-label">{this.props.label ? 'Session' : 'Break'}</p>
            </div>
        )
    }
}

Timer.propTypes = {
    label: PropTypes.bool
}

export default Timer;