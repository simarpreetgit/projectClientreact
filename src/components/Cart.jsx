// import React from 'react'
// import { useState,useEffect } from 'react'
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';

// const Cart = ({cart,setCart,handleChange}) => {

// const [price,setPrice] = useState(0);

// const handleRemove = (id) => {
//     const arr = cart.filter((products) => products._id !== id);
//     setCart(arr);
//     handlePrice();
//   };

//  const handlePrice = ()=>{
//     let ans = 0;
//     cart.map((products) => (ans += products.amount * products.price));
//     setPrice(ans);

//  } 


//  useEffect(()=>{

//     handlePrice();
//  })
//   return (
//     <div>
// <div className='rowclass'> 


//       {cart.map((products) => (
//         <div key={products._id}>
//           <div>
//           <MDBCol lg='4' md='6' className='mb-4'>
//         <img
//           src={products.image}
//           className='img-fluid rounded-circle'
//           alt=''
//           style={{height:150}}
//         />
//         <h2>{products.name}</h2>
      
//       <h3>Price {products.price}€</h3>
// <Button onClick={()=> handleChange(products, 1)} variant="outline-primary" style={{width:'3rem'}}>+</Button>{' '}
// <Button variant="outline-primary" style={{width:'5rem'}}>Qty {products.amount}</Button>{' '}
 
//     <Button onClick={()=> handleChange(products, -1)} variant="outline-primary" style={{width:'3rem'}}>-</Button>{' '}
//     <Button onClick={()=> handleRemove(products._id)} variant="outline-primary" style={{width:'5rem'}}>🗑</Button>
//       </MDBCol>
           
          
//           </div>
//           {/* <div>
//             <button onClick={() => handleChange(products, 1)}>+</button>
//             <button>{products.amount}</button>
//             <button onClick={() => handleChange(products, -1)}>-</button>
//           </div> */}
//           {/* <div>
//             <span>{products.price}</span>
//             <button onClick={() => handleRemove(products._id)}>Remove</button>
//           </div> */}
//         </div>
        
//       ))}
//       <div> 
//         <h3>Total Price</h3>
//         <Button variant="outline-primary" style={{width:'8rem'}}><h2>  € {price}</h2></Button>{' '}
// </div>
    

//       {/* <div className="total">
        
//         <span>€ - {price}</span>
//       </div> */}
//       </div>
//     </div>
//   )
// }

// export default Cart
