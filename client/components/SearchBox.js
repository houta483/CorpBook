import React from 'react';


const SearchBox = ({searchChange}) =>{

    return(
        <div className ='pa2'>
        <input 
        className='pa3 ba bg-lighest-blue'
        type='search' 
        placeholder='searchName'
        onChange = {searchChange}
        />
        </div>
    );

}

export default SearchBox