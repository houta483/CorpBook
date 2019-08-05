import React from 'react';


const SearchBox = ({searchChange, placeholder}) =>{

    return(
        <div className ='pa2'>
        <input 
        className='pa3 ba bg-lighest-blue'
        type='search' 
        placeholder={placeholder}
        onChange = {searchChange}
        />
        </div>
    );

}

export default SearchBox