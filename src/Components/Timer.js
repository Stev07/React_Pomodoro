import React from 'react';
import './Timer.css';
import './Box.css';


class Timer extends React.Component {
    constructor(props) {
      super(props);
      //! Set time to 25mins
      this.state = {
        seconds: 1500,
        timerID: ""
      };

      this.addTime = this.addTime.bind(this);
      this.lessTime = this.lessTime.bind(this);
      this.startStop = this.startStop.bind(this);
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);


    }

    
    start(){
      if(this.state.seconds > 0){
        document.querySelector('.start').innerHTML = "Stop"
      //  setInterval(() => {this.setState({ seconds: this.state.seconds - 1}) }, 1000)}
        this.setState({timerID : setInterval(() => {this.setState({ seconds: this.state.seconds - 1}) }, 1000)})
    }}

    stop() {
      clearInterval(this.state.timerID)
      this.setState({
        seconds:this.state.seconds = 0
      })
      document.querySelector('.start').innerHTML = "Start"
            
    }

    startStop() {
      document.querySelector('.start').innerHTML == "Start" ? 
        this.start() : this.stop()
    }



    addTime() {
      this.setState({ seconds: this.state.seconds + 60 });
    }

    lessTime() {
      if (this.state.seconds > 0){
        this.setState({ seconds: this.state.seconds - 60 });
      }
      
    }


    convertToHhMmSs(seconds) {
      let h = Math.floor(seconds / 3600);
      let m = Math.floor((seconds % 3600) / 60);
      let s = Math.floor((seconds % 3600) % 60);

      //! add zero if only one number
      if(s < 10){
        s = `0${s}`
      }

      if(m < 10){
        m = `0${m}`
      }

      if(h < 10){ 
        h = `0${h}`
      }

      return `${h}:${m}:${s}`;
    }
  
    render() {
      return (
        <div className="box">
          <div className="time">
          {this.convertToHhMmSs(this.state.seconds)}
          </div>
            <div className="more" onClick={this.addTime}>+</div>
            <div className="start" onClick={this.startStop}>Start</div>
            <div className="less"onClick={this.lessTime}>-</div>
        </div>

      );
    }
  }

  export default Timer