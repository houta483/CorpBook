import React, { Component } from "react";
import './CreateProfile.css'

class CreateProfile extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            fName:'Will',
            lName:'Sentence',
            cohort:'',
            company:'',
            pastCompanies:'',
            location:'',
            Education:'',
            LinkedIn:'',
            Teach:'',
            AskMe:'',
            MyersBrigg:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
       
    }
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value}); //[] makes key a variable
        event.preventDefault();
    }
    handleSubmit(event) {
        alert(this.state)
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
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='What cohort were you part of' id = 'cohort' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='What company are you currently in?' id = 'company' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='What city are you currently in?' id = 'location' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='Position?' id='Position' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='What are past companies you`ve worked for' id='pastCompanies' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='Education?' id='Education' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='Facebook Url' id='Facebook' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='LinkedIn Url' id='LinkedIn' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='ICanTeachYou' id='Teach' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='Ask me about' id='AskMe' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='MyersBrigg' id='MyersBrigg' onChange={this.handleChange}/>
            {/* <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='Where do you work?' id='AttitudeTest' onChange={this.handleChange}/>
            <input className="pa2 input-reset ba bg-grey hover-bg-white w-100" type='text' placeholder='Where do you work?' id='KolbeTest' onChange={this.handleChange}/> */}
            <input className="pa2 input-reset ba bg-grey hover-bg-white hover-green w-33" type="submit" bsstyle="primary" value="next" /> 
            </form>
            
          </div>
        )
    }
}
export default CreateProfile