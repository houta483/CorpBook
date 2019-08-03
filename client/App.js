import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Login from './components/Login.js';

class App extends Component {
   
//logic for conditional rendering
    render() { 
        return (
            <div className="App">
                <Login/>
            </div>
        )
    }
}

export default App;