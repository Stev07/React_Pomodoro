import React from "react";
import './css/Button.css';



class Button extends React.Component {

    render() {
        
        return (
            <button 
                className={this.props.className}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                {this.props.value}
            </button>
            );
        }
    }

export default Button