import React, { Component } from "react";
import SetTimers from "./components/SetTimers";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalID: null,
      countdown: 1500,
      "session-length": 25,
      "break-length": 5,
      running: false,
      isSession: true
    };
  }

  handleClick = e => {
    const value = e.target.parentNode.attributes.for.value;
    if (this.state.running) {
      return;
    }
    if (value === "session-length") {
      if (e.target.textContent === "-" && this.state[value] > 1) {
        this.setState({
          [value]: this.state[value] - 1,
          countdown: this.state.countdown - 60
        });
      } else if (e.target.textContent === "+" && this.state[value] < 60) {
        this.setState({
          [value]: this.state[value] + 1,
          countdown: this.state.countdown + 60
        });
      }
    } else {
      if (e.target.textContent === "-" && this.state[value] > 1) {
        this.setState({
          [value]: this.state[value] - 1
        });
      } else if (e.target.textContent === "+" && this.state[value] < 60) {
        this.setState({
          [value]: this.state[value] + 1
        });
      }
    }
  };

  handleToggleStartStop = () => {
    if (this.state.running) {
      this.setState({ running: false });
      this.state.intervalID && clearInterval(this.state.intervalID);
    } else {
      this.startTime();
      this.setState({ running: true });
    }
  };

  startTime = () => {
    this.setState({
      intervalID: setInterval(() => {
        this.runTime();
        this.timerControl();
      }, 1000)
    });
  };

  runTime = () => {
    this.setState({ countdown: this.state.countdown - 1 });
  };

  timerControl = () => {
    let timer = this.state.countdown;
    this.buzzer(timer);
    if (timer < 0) {
      if (this.state.isSession) {
        this.state.intervalID && clearInterval(this.state.intervalID);
        this.startTime();
        this.switchTimer(this.state["break-length"] * 60, false);
      } else {
        this.state.intervalID && clearInterval(this.state.intervalID);
        this.startTime();
        this.switchTimer(this.state["session-length"] * 60, true);
      }
    }
  };

  buzzer = _timer => {
    if (_timer === 0) {
      this.audioBeep.play();
    }
  };

  switchTimer = (num, str) => {
    this.setState({
      countdown: num,
      isSession: str
    });
  };

  handleResetTimer = () => {
    this.setState({
      "session-length": 25,
      "break-length": 5,
      running: false,
      isSession: true,
      countdown: 1500,
      intervalID: null
    });
    this.state.intervalID && clearInterval(this.state.intervalID);
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };

  render() {
    return (
      <div className="container">
        <SetTimers
          sessionTime={this.state["session-length"]}
          breakTime={this.state["break-length"]}
          setTime={this.handleClick}
        />
        <Timer
          label={this.state.isSession}
          running={this.state.running}
          time={this.state.countdown}
        />
        <Buttons
          startStopTimer={this.handleToggleStartStop}
          resetTimer={this.handleResetTimer}
          running={this.state.running}
        />
        <audio
          id="beep"
          preload="auto"
          src="https://onlineclock.net/audio/options/default.mp3"
          ref={audio => {
            this.audioBeep = audio;
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
