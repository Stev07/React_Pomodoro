import React from "react";


class Timer extends React.Component {

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
            <div className="time">
                {this.convertToHhMmSs(this.props.seconds)}
            </div>         
            );
        }
    }

export default Timer