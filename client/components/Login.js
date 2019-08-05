import React, { Component } from "react";
import './Login.css'
import Cookies from 'js-cookie';
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: Cookies.get('access_token')
         }
    }

    render() {

        return (    
            <div className="Login">
            
            </div>
        )
    }    
}


export default Login;