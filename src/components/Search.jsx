import React from 'react'
import FormControl from 'react-bootstrap/FormControl';


const Search = (props) => {
    
const handelInput = e =>{
  e.preventDefault();
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
