import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';




function Foodbox(props) {
const [count, setCount] = useState(0);

const filtered = props.products.filter(product=>{
  return product.name.toLowerCase().includes(props.searchedFood.toLowerCase())
})


if(props.products.length === 0)
{
return <>
  <p>Loading...</p>

</>

}

  return (
    <div> 
    <div className='cardset'> 
    <Row xs={1} md={2} className="g-3"> 
   
    {filtered.map((product)=>(  
      
  <Card bg='Info' border='primary' text='secondary' key={product._id} style={{width:'18rem'}}>
  <br></br><Card.Img  style={{height: 150}} variant='top' src = {product.image} />
  <Card.Body>
<Card.Title>{product.name} </Card.Title>
<br/>
<Card.Text>{product.description} {count}</Card.Text>

<Card.Text>{product.price}</Card.Text>
<Button onClick={()=> setCount(count + 1)} variant="outline-primary" style={{width:'5rem'}}> + </Button>{' '}
<Button onClick={()=> setCount(count - 1)} variant="outline-primary" style={{width:'5rem'}}> - </Button>{' '}
  </Card.Body>
  </Card>
  ))}
  </Row>
  </div>
  </div>
 
    )
}

export default Foodbox
