import React, { Component } from "react";
import './CreateProfile.css'

class CreateProfile extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            fName:'Will',
            lName:'Sentence',
            company:'',
            cohort:'',
            location:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
       
    }
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value}); //[] makes key a variable
        event.preventDefault();
    }
    handleSubmit(event) {
        alert('So you`re from ' +this.state.cohort + 'and you work for ' + this.state.company + ' at' + this.state.location)
        this.props.createProfleFunction()
        event.preventDefault();
    }
    render(){
        const willUrl='https://media.licdn.com/dms/image/C4D03AQFmD1B7L-NyDg/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=iJF1YP14DJCUMA-dVsC7GvweyB_Mx4Ue12Ht-tAslZQ';
        return(
        <div className='ba ph0 mh0 bg-light-blue' id = 'submitform'>
            <h1 className='bg-silver'>
                <p className='tr'>Welcome {this.state.fName} {this.state.lName}</p>
                <img className='w-30' alt='profilePic' src={willUrl}/> 
            </h1>
            <form className = 'measure center ' onSubmit={this.handleSubmit}>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='What company are you currently in?' id = 'company' onChange={this.handleChange}/> 
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='What cohort were you part of' id = 'cohort' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='Where do you work?' id='location' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white hover-green w-33" type="submit" bsstyle="primary" value="next" /> 
            </form>
            
          </div>
        )
    }
}
export default CreateProfile