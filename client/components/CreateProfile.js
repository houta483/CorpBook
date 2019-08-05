import React, { Component } from "react";
import './CreateProfile.css'

class CreateProfile extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            State:'',
            fName:'',
            lName:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
       
    }
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value}); //[] makes key a variable
        event.preventDefault();
    }
    handleSubmit(event) {
        alert('The fname is ' + this.state.fName + ' and the last name is' + this.state.lName)
        this.props.createProfleFunction()
        event.preventDefault();
    }
    render(){
        return(
        <div className='ba ph0 mh0 bg-light-blue' id = 'submitform'>
            <h1 className='bg-silver tc'>Welcome INSERT NAME HERE</h1>
            <form className = 'measure center ' onSubmit={this.handleSubmit}>
            <input type='text' placeholder='FirstName' id = 'fName' onChange={this.handleChange}/> 
            <input type='text' placeholder='LastName' id = 'lName' onChange={this.handleChange}/>
            <input type='text' placeholder='State' id='State' onChange={this.handleChange}/>
            <input type="submit" bsstyle="primary" value="next" /> 
            </form>
            
          </div>
        )
    }
}
export default CreateProfile