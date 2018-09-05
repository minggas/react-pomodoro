import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

class Buttons extends Component { 
  render() {
    return (
      <div class="buttons">
        <button className={this.props.running ? 'pause' : 'start'} id="start_stop" onClick={this.props.startStopTimer}>{this.props.running?'Pause':'Start'}</button>
        <button className="stop" id="reset" onClick={this.props.resetTimer}>Reset</button>
    </div>
    )
  }
}


Buttons.propTypes = {
    running: PropTypes.bool,
    resetTimer: PropTypes.func.isRequired,
    startStopTimer: PropTypes.func.isRequired
}

export default Buttons;
