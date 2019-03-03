import React from 'react';
import Header from './Components/Header';
import Modall from './Components/Modall';
import Timer from './Components/Timer';
import Button from './Components/Button';
import '././Components/css/Box.css';
import '././Components/css/Timer.css';

class App extends React.Component{

    constructor(props) {
        super(props);
        // Set time to 20mins
        this.state = {
            seconds: 1200,
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
            this.setState({seconds: this.state.seconds =1200})
            
            }
        },1000)})
    }

    reset() {
        clearInterval(this.state.timerID)
        this.setState({
            seconds:this.state.seconds = 1200
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


    render(){
        return(
            <div className="container">
                <Modall isOpen={this.state.isOpen}
                        closeModal={this.closeModal}
                        restart={this.restart}
                        showModal={this.state.showModal}
                />
    
                <Header name="React Pomodoro" />

                <div className="content">

                    <div className="box">

                        <Timer seconds={this.state.seconds}/>
                        <Button className="more"
                                disabled={this.state.active}
                                onClick={this.addTime}
                                value="+"
                                />
                        
                        <Button className="start"
                                onClick={this.startReset}
                                value="Start"
                                />

                        <Button className="less"
                                disabled={this.state.active}
                                onClick={this.lessTime}
                                value="-"
                                />
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default App