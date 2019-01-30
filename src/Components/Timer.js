import React from 'react';
import './Timer.css';
import './Box.css';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 :'400px',
    height                :'200px'
  }
};


Modal.setAppElement('#app')

class Timer extends React.Component {
    constructor(props) {
      super(props);
      // Set time to 20mins
      this.state = {
        seconds: 5,
        timerID: null,
        active:false,
        showModal: false
      };

      this.addTime = this.addTime.bind(this);
      this.lessTime = this.lessTime.bind(this);
      this.startReset = this.startReset.bind(this);
      this.start = this.start.bind(this);
      this.reset = this.reset.bind(this);
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.restart = this.restart.bind(this);

    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    restart(){
      this.handleCloseModal()
      this.start()
    }

    start(){
      document.querySelector('.start').innerHTML = "Reset"
      this.setState({active:true})
      

      let count = this.setState({timerID: setInterval(()=>{
        if(this.state.seconds>0){
          this.setState({ seconds: this.state.seconds - 1})
        }else{
          clearInterval(count)
          this.handleOpenModal()
          clearInterval(this.state.timerID)
          this.setState({seconds: this.state.seconds =5})
          

        }
      },1000)})
    }

    reset() {
      clearInterval(this.state.timerID)
      this.setState({
        seconds:this.state.seconds = 5
      })

      document.querySelector('.start').innerHTML = "Start"
      this.setState({active:false})   
    }

    startReset() {
      document.querySelector('.start').innerHTML == "Start" ? 
        this.start() : this.reset()
    }



    addTime() {
      this.setState({ seconds: this.state.seconds + 60 });
    }

    lessTime() {
      if (this.state.seconds > 59){
        this.setState({ seconds: this.state.seconds - 60 });
      }
      
    }


    convertToHhMmSs(seconds) {
      let h = Math.floor(seconds / 3600);
      let m = Math.floor((seconds % 3600) / 60);
      let s = Math.floor((seconds % 3600) % 60);

      // add zero if only one number
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
        {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
        <Modal
          style={customStyles}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        > 
          <p>Have a break ...</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <button onClick={this.restart}>Restart</button>
        
        </Modal>
          <div className="time">
          {this.convertToHhMmSs(this.state.seconds)}
          </div>
            <button className="more" disabled={this.state.active} onClick={this.addTime}>+</button>
            <button className="start" onClick={this.startReset}>Start</button>
            <button className="less" disabled={this.state.active} onClick={this.lessTime}>-</button>
        </div>

      );
    }
  }

  export default Timer