import React from 'react'
import { useState} from 'react';

const Search = ({getQuery}) => {
      const [text, setText] = useState('');

  
    function onChange(q) {
        setText(q);
         getQuery(q);
    }
    
    
    return (
        <form className="search"> 
            <input type="text" placeholder="search" value={text} onChange={(e) => {
                onChange(e.target.value);
            }}/>
        </form>
   
    )
}

export default Search;