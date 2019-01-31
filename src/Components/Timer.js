import React from 'react';
import './Timer.css';
import './Box.css';
import Modal from 'react-modal';

///MODAL STYLE
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 :'400px',
    height                :'200px',
    textAlign             :'center',
    border                :'6px solid #eaec7e',
    background            :'#f8d6ac'
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
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.restart = this.restart.bind(this);

    }
    ///MODAL FUNCTIONS


    openModal() {
      this.setState({ showModal: true })
    }
    
    closeModal() {
      this.setState({ showModal: false })
      document.querySelector('.start').innerHTML = "Start"
      this.setState({active:false})
    }

    restart(){
      this.closeModal()
      this.start()
    }
    ///


    start(){
      document.querySelector('.start').innerHTML = "Reset"
      this.setState({active:true})
      

      let count = this.setState({timerID: setInterval(()=>{
        if(this.state.seconds>0){
          this.setState({ seconds: this.state.seconds - 1})
        }else{
          clearInterval(count)
          this.openModal()
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
        {/* <button onClick={this.openModal}>Trigger Modal</button> */}
        <Modal
          style={customStyles}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        > 
          <h3 class="break">Have a break ...</h3><br/>
          <button className="modalBtn1" onClick={this.closeModal}>Close Modal</button>
          <button className="modalBtn2" onClick={this.restart}>Restart</button>
          {/* <button className="modalBtn3">5 mins break</button>
          <button className="modalBtn4">30 mins break</button> */}
        
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