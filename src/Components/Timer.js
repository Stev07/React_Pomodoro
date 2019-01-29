import React from 'react';
import './Timer.css';
import './Box.css';


class Timer extends React.Component {
    constructor(props) {
      super(props);
      //! Set time to 25mins
      this.state = { seconds: 1500 };
      this.addTime = this.addTime.bind(this);
      this.lessTime = this.lessTime.bind(this);
      this.start = this.start.bind(this);
      // this.tick = this.tick.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
    }

    
    // tick() {
    //   this.setState(state => ({
    //     seconds: state.seconds - 1
    //   }));
    // }
  
    // componentDidMount() {
    //   this.interval = setInterval(() => this.tick(), 1000);
    // }
  
    // componentWillUnmount() {
    //   clearInterval(this.interval);
    // }

    start() {
          document.querySelector('.start').innerHTML == "Start" ? 
          document.querySelector('.start').innerHTML = "Pause":
          document.querySelector('.start').innerHTML = "Start"
          setInterval(() => {this.setState({ seconds: this.state.seconds - 1}) }, 1000);
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

      //! add zéro if only one number
      if(s == 0 || s == 1 || s == 2 || s == 3 || s == 4 || s == 5 || s == 6 || s == 7 || s == 8 || s == 9){
        s = `0${s}`
      }

      if(m == 0 || m == 1 || m == 2 || m == 3 || m == 4 || m == 5 || m == 6 || m == 7 || m == 8 || m == 9){
        m = `0${m}`
      }

      if(h == 0 || h == 1 || h == 2 || h == 3 || h == 4 || h == 5 || h == 6 || h == 7 || h == 8 || h == 9){
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
            <div className="start" onClick={this.start}>Start</div>
            <div className="less"onClick={this.lessTime}>-</div>
        </div>

      );
    }
  }

  export default Timer