import React from 'react';
import './Cards.css'
const Card= (props) => {
    return(
        <div id = 'Card' className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img id = 'img' alt='profilePic' src={props.url}/>
                <p>Name is : {props.name}</p>
                <p>test</p>
                <p>email</p>
        </div>
    )
}

export default Card;