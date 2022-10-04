import Header from './components/Header';
import './App.css';
import Foodbox from './components/Foodbox';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react';
import Addform2 from './components/Addform2';
import Search from './components/Search';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';

const API_URI ='http://localhost:5005';

function App() {
const [showcreteform,setcreateform] = useState(true)
const [products,setproducts]=useState([]);
const [searchfFormState, setSearchFormState] = useState('')
const [searchedFood,setsearchedFood]=useState('');
console.log(searchedFood)

useEffect(()=>{
  axios.get(`${API_URI}/api/products`)
  .then(response=>setproducts(response.data))
  .catch(err=>console.log(err))

},[])


console.log(products)

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




const hideevent=e=>{
  setcreateform(!showcreteform)

}
return (
  
  
    <div className="App">
  
  <Routes>
     
  <Route path ="Signup" element = { <Signup /> } />

  
   </Routes>
      <Header />
  
     <br></br> {!showcreteform && < Addform2 /> }
      <br></br>
      <div className='setpart1'> 
      <Search searchFood={searchFood} setsearchedFood = {setsearchedFood} searchedFood ={searchedFood}/>
      <br></br><Button style={{width :200}} type="primary" onClick={hideevent} >{showcreteform ? 'Table Booking' :'Close' }</Button><br></br>  
      </div>
      <br></br><Foodbox searchedFood = {searchedFood} products={products}/>
     
     

   
     
    </div>
  );
}

export default App;
