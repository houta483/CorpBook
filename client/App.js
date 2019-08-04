import React, { Component } from 'react';

import Login from './components/Login.js';
import CreateProfile from './components/CreateProfile.js'
import HomePage from './components/HomePage'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login:true,
            createProfile:false,
            homePage:false,
        };
        this.loggedInFunction = this.loggedInFunction.bind(this);
        this.createProfleFunction = this.createProfleFunction.bind(this);
    
    };
   
//logic for conditional rendering
    loggedInFunction(){ //Dont render the login page go to profile
        this.setState({login:false, createProfile:true})
    }
    createProfleFunction(){
        alert("we used createProfileFun")
        this.setState({createProfile:false, homePage:true})
    }
    render() { 

        if(this.state.login){
            return (
                <div className="App">
                    <Login loggedInFunction = {this.loggedInFunction}/>
                </div>
            )
        }
        if(this.state.createProfile){
            alert("going to create profile")
            return (
                <div className="App">
                    <CreateProfile createProfleFunction = {this.createProfleFunction}/>
                </div>
            )
        }
        if(this.state.homePage){
            return (
                <div className="App">
                    <HomePage/>
                </div>
            )
        }
    }
}

export default App;