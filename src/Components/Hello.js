import React from "react";
import "../scss/hello.scss";

class Hello extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="infoBox">
          <div>
            <h1>
              <span class="developer">I am</span> Steve Dossin
            </h1>
          </div>
          <div class="">
            <h2>
              Junior Web <span class="developer">Developer</span>
            </h2>
          </div>
          <div>
            <p>
              I like dabbling in various parts of frontend development and like
              to learn about new technologies, write technical articles or
              simply play games in my free time.
            </p>
          </div>
          <div class="separate" />
          <div class="social">
            <a target="_blank" href="https://www.linkedin.com/in/steve-dossin/">
              <i class="fab fa-linkedin-in social-icon" />
            </a>
            <a target="_blank" href="https://github.com/Stev07">
              <i class="fab fa-github social-icon" />
            </a>
            <a target="_blank" href="https://www.npmjs.com/~stevoxxx">
              <i class="fab fa-npm social-icon" />
            </a>
          </div>
        </div>
        <div class="down">
          <a href="#about"><i class="fas fa-chevron-circle-down" /></a>
        </div>
      </div>
    );
  }
}

export default Hello;
