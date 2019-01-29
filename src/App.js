import React from 'react';
import Timer from './Components/Timer';


class App extends React.Component{

    render(){
        const Hello = 'React Pomodoro';

        return(
            <div className="container">
                <header>
                    <h1 className="title">{Hello}</h1>
                </header>
                <div className="content">
                    <Timer/>
                </div>
            </div>
        );
    }
}

export default App