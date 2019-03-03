import React from "react";
import './css/Header.css';


class Header extends React.Component {


    render() {
        
        return (
            <header>
                <h1 className="title">{this.props.name}</h1>
            </header>           
            );
        }
    }

export default Header