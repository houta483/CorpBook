import React, { Component } from "react";
import './HomePage.css'
import Card from './Card'
import Cookies from 'js-cookie';
import SearchBox from './SearchBox.js';
const cardsDisplay = [];
const names = ['Jimmy ', 'Will ', 'Schno '];
const urls = ['https://media.licdn.com/dms/image/C4E03AQHOMZg1CciNww/profile-displayphoto-shrink_100_100/0?e=1570665600&v=beta&t=JklTNb0GqQHzzre2hYxXUtEbB-B5_E3Xz01d1aHH4t0',
'https://media.licdn.com/dms/image/C4D03AQFmD1B7L-NyDg/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=iJF1YP14DJCUMA-dVsC7GvweyB_Mx4Ue12Ht-tAslZQ',
'https://media.licdn.com/dms/image/C5603AQGUwZlmkb2hEQ/profile-displayphoto-shrink_800_800/0?e=1570665600&v=beta&t=rbanoTOd1UvsOfnBCL9kiCaAYZceED4mJ0Z1lnjBX4Q'
];
const profiles = [
    {name:names[0], url:urls[0]}, 
    {name:names[1], url:urls[1]}, 
    {name:names[2], url:urls[2]}

]
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: Cookies.get('access_token'),
            searchField:'',
            names:names,
            profiles:profiles
         }
    }
    onSearch = (event) =>{
        this.setState({searchField:event.target.value})
        console.log(this.state.searchField);
    }
    render(){
        //each card will have props that will b passed down
        //test data
        
        const filterNames = this.state.names.filter(el=>{
            return el.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        for(let i = 0; i < names.length; i++){
            cardsDisplay.push(<Card id = {i} key = {i} 
            name={this.state.profiles[i].name} 
            url={this.state.profiles[i].url}
                
            />
            )
        }
        //need to fetch from DB to get all the cards 
        //<Card id = {}, key = {}/> 
        if(this.state.username){
            //tc is text center
            return(
               <div className='bg-silver tc'> 
                <h1>LinkedIn Files </h1>
                <SearchBox searchChange={this.onSearch}/>
                {cardsDisplay}
               </div>
                )
        }
        else{
            return('nothing')
        }
    }
}
export default HomePage