
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';


const API_URI ='http://localhost:5005';


function Foodbox({handleClick,searchedFood }) {

  const [products,setproducts]=useState([]);
const filtered = products.filter(products=>{
  return products.name.toLowerCase().includes(searchedFood.toLowerCase())
})

// const handleClick = (product)=>{

// console.log(product)
// }

useEffect(()=>{
  axios.get(`${API_URI}/api/products`)
  .then(response=>setproducts(response.data))
  .catch(err=>console.log(err))

},[])


if(products.length === 0)
{
return <>
  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
</>

}

  return (
    <div> 
    
    <Row xs={1} md={2} className="g-3"> 
   
    {filtered.map((products)=>(  
      
  <Card bg='Info' border='primary' text='secondary' key={products._id} style={{width:'18rem'}}>
  <br></br><Card.Img  style={{height: 150}} variant='top' src = {products.image} />
  <Card.Body>
<Card.Title>{products.name} </Card.Title>
<br/>
<Card.Text>{products.description}</Card.Text>

<Card.Text>Price {products.price} € </Card.Text>

  
<Button onClick={()=> handleClick(products)} variant="outline-primary" style={{width:'10rem'}}>Add To Cart </Button>{' '}


  </Card.Body>
  
  </Card>
  
  ))}
  </Row>
  
  </div>
 
    )
}

export default Foodbox
