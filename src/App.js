import Header from './components/Header';
import './App.css';
import Foodbox from './components/Foodbox';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import Addform2 from './components/Addform2';
import Search from './components/Search';
import axios from 'axios';
import { Routes,Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Cart2 from './components/Cart2';
import Spinner from 'react-bootstrap/Spinner';


const API_URI ='http://localhost:5005';

function App() {
const [showcreteform,setcreateform] = useState(true)
const [products,setproducts]=useState([]);
const [searchedFood,setsearchedFood]=useState('');

const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

//console.log(searchedFood)

useEffect(()=>{
  axios.get(`${API_URI}/api/products`)
  .then(response=>setproducts(response.data))
  .catch(err=>console.log(err))

},[])

// if(products.length === 0)
// {
// return <>
//   <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>


// </>

// }
//console.log(products)

let serchedFoods
  const searchFood = (str) => {
    if (str === '') {
      serchedFoods = products
    } else {
      serchedFoods = products.filter((prd) => {
        return prd.name.toLowerCase().includes(str.toLowerCase())
      })
    }
    setproducts(serchedFoods)
  };


const handleClick = (products)=>{
  if (cart.indexOf(products) !== -1) return;
  setCart([...cart, products]);

}

const handleChange = (products, d) => {
  const ind = cart.indexOf(products);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr]);
};

const hideevent=e=>{
  setcreateform(!showcreteform)

}
return (
  
  
    <div className="App">
  <Header  setShow={setShow} size ={cart.length}  />

  {/* <Routes>
     
  <Route path ="Signup" element = { <Signup /> } />

  
   </Routes> */}

      

     <br></br> {!showcreteform && < Addform2 /> }
      <br></br>
      <div className='setpart1'> 
      <Search searchFood={searchFood} setsearchedFood = {setsearchedFood} searchedFood ={searchedFood}/>
      <br></br><Button style={{width :200}} type="primary" onClick={hideevent} >{showcreteform ? 'Table Booking' :'Close' }</Button><br></br>  
      </div>
      <br></br>{show ? ( <Foodbox searchedFood = {searchedFood} products={products} handleClick={handleClick}/>
      ):(
      
      <Cart2 cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      
    </div>
  );
}

export default App;
