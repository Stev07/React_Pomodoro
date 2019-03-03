import React from "react";
import "../scss/navigation.scss";

class Header extends React.Component {

    

    render() {
        
        return (
            <header>
                <nav>
                    <li><a a href='#' className="active">HELLO</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">RESUME</a></li>
                    <li><a href="#">WORKS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </nav>
            </header>
            );
        }
    }

export default Header