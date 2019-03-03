import React from "react";
import Navigation from "./Components/Navigation";
import Hello from "./Components/Hello";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Works from "./Components/Works";
import Contact from "./Components/Contact";



class App extends React.Component {
  render() {
    return (
      <div id="main">
        <div id="hello">
          <Navigation />
          <Hello />
        </div>
          <About />
          <Resume />
          <Works/>
          <Contact />        
      </div>
    );
  }
}

export default App;
