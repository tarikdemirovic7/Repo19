// src/index.js

import React, { Component } from 'react'; // Change this line
import ReactDOM from 'react-dom';
import './index.css';

// add the following code below this line

class App extends Component {   // Change this line
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
            </div>
        )
    }
}

// add the following code below this line
ReactDOM.render(<App />, document.getElementById('root'));