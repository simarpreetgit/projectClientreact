import React from 'react'
import { useState,useEffect } from 'react'
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import {RiDeleteBinFill} from 'react-icons/ri'


const Cart2 = ({cart,setCart,handleChange}) => {
 
 // eslint-disable-next-line
    const [prce,setPrice] = useState(0);
    // eslint-disable-next-line
    const [displayPrices, setDisplayPrices] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    const handleRemove = (id) => {
        const arr = cart.filter((products) => products._id !== id);
        setCart(arr);
        handlePrice();
      
      };
    
     const handlePrice = ()=>{
        let ans = 0;
        cart.map((products) => (ans += products.amount * products.price));
        setPrice(ans.toFixed(2));
    
     } 
    
    
     useEffect(()=>{
    
        handlePrice();
         // eslint-disable-next-line
     },[])
    
     useEffect(()=>{
      const listOfPrices = cart.map(product => { return {displayPrice: product.price * product.amount} })
      const sumOfList = cart.map(product => product.amount * product.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      setDisplayPrices(listOfPrices)
      setTotalPrice(sumOfList)
    }, [cart])
  return (
    <div>
     
<br></br><br></br>
<MDBRow>
      {cart.map((products,index)=>(
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
    {/* <span>€ {displayPrices.length !== 0 && displayPrices[index].displayPrice}</span> */}

    <Button onClick={()=> handleRemove(products._id)} variant="outline-primary" style={{width:'5rem'}}> <RiDeleteBinFill fontSize =" 25px" /></Button>
      </MDBCol>
      ))}
      
    
</MDBRow>
 <br></br><div className='totalprice'> 
        <h3>Total Price</h3>

        <Button className='bttotalprice' variant="outline-primary" style={{width:'7rem',height:40}}><h3>  € {totalPrice}</h3></Button>{' '}
        <form
            method="POST"
            action="https://checkout.flutterwave.com/v3/hosted/pay"
          >
            <div> </div>
            <input
              type="hidden"
              name="public_key"
              value="FLWPUBK_TEST-SANDBOXDEMOKEY-X"
            />
            <input
              type="hidden"
              name="customer[email]"
              value="order@pastavila.com"
            />
            <input type="hidden" name="customer[name]" value="Jesse Pinkman" />
            <input type="hidden" name="tx_ref" value="bitethtx-019203" />
            <input type="hidden" name="amount" value={totalPrice} />
            <input type="hidden" name="currency" value="USD" />
            <input type="hidden" name="meta[token]" value="54" />
            <input type="hidden" name="redirect_url" value="" />
            <Button type="submit" id="start-payment-button" variant="outline-primary">
              Pay Now
            </Button>
          </form>
</div>

<div>
          
        </div>
    </div>
    
  )
}

export default Cart2
