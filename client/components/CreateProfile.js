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
        //this.setState({fName: event.target.value});
        placeholder = event.target.value;
        event.preventDefault();
    }
    handleSubmit(event) {
        this.setState({validZip:true});
        event.preventDefault();
    }
    render(){
        return(
        <div>
            <form onSubmit={this.props.createProfleFunction &  alert('Hi you entered ' + this.state.fName)}>
            <input type='text' placeholder='FirstName' firstName={this.state.fName} onChange={this.handleChange}/> 
            {/* <input type='text' placeholder='LastName' lastName={this.state.lname} onChange={this.handleChange}/>
            <input type='text' placeholder='State' firstName={this.state.state} onChange={this.handleChange}/>
            <input type="submit" bsstyle="primary" value="next" />  */}
            </form>
            
          </div>
        )
    }
}
export default CreateProfile