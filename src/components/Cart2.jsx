import React from 'react'
import { useState,useEffect } from 'react'
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';



const Cart2 = ({cart,setCart,handleChange}) => {
   
    const [price,setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((products) => products._id !== id);
        setCart(arr);
        handlePrice();
      };
    
     const handlePrice = ()=>{
        let ans = 0;
        cart.map((products) => (ans += products.amount * products.price));
        setPrice(ans);
    
     } 
    
    
     useEffect(()=>{
    
        handlePrice();
     })
    

  return (
    <div>
      <div className='totalprice'> 
        <h3>Total Price</h3>

        <Button variant="outline-primary" style={{width:'8rem',height:40}}><h2>  € {price}</h2></Button>{' '}
</div>
<br></br><br></br>
<MDBRow>
      {cart.map((products)=>(
        <MDBCol lg='4' md='6' className='mb-4'key={products._id}>
        <img
          src={products.image}
          className='img-fluid rounded-circle'
          alt=''
          style={{height:150}}
        />
        <h2>{products.name}</h2>
      
      <h3>Price {products.price}€</h3>
<Button onClick={()=> handleChange(products, 1)} variant="outline-primary" style={{width:'3rem'}}>+</Button>{' '}
<Button variant="outline-primary" style={{width:'5rem'}}>Qty {products.amount}</Button>{' '}
 
    <Button onClick={()=> handleChange(products, -1)} variant="outline-primary" style={{width:'3rem'}}>-</Button>{' '}
    <Button onClick={()=> handleRemove(products._id)} variant="outline-primary" style={{width:'5rem'}}>🗑</Button>
      </MDBCol>
      ))}
      
    
</MDBRow>
    </div>
    
  )
}

export default Cart2
