import React from 'react'
import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';

const Search = (props) => {
    
const handelInput = e =>{

props.setsearchedFood(e.target.value)
}

  return (
    <div>
       <FormControl 
  style={{width :200}}
   placeholder='🔍 Search'
    className='m-auto' size='sm' value={props.searchedFood} onChange={handelInput} />
    </div>
  )
}

export default Search
