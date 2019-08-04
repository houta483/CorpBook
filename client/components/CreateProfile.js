import React, { Component } from "react";
import './CreateProfile.css'
let placeholder;
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
        this.setState({validZip:true});
        event.preventDefault();
    }
    render(){
        return(
        <div>
            <form onSubmit={this.props.createProfleFunction}>
            <input type='text' placeholder='FirstName' id = 'fName' onChange={this.handleChange}/> 
            <input type='text' placeholder='LastName' id = 'lName' onChange={this.handleChange}/>
            <input type='text' placeholder='State' firstName={this.state.state} onChange={this.handleChange}/>
            <input type="submit" bsstyle="primary" value="next" /> 
            </form>
            
          </div>
        )
    }
}
export default CreateProfile