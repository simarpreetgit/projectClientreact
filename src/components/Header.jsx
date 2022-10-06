import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';



const Header = ({setShow,size,hideevent,showcreteform}) => {
 
  return (

    <Navbar bg="primary " expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={()=>setShow(true)} href="/">Singh Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
 <Button style={{width :200,color:'black'}} type="primary" onClick={hideevent} >{showcreteform ? 'Table Booking' :'Close' }</Button>

          </Nav>
          <Nav.Link  onClick={()=>setShow(false)}><FaShoppingCart color='black' fontSize="25px"/><Badge color='black'>{size}</Badge></Nav.Link>
         
          
        </Navbar.Collapse>

      </Container>
    </Navbar>

)
}



export default Header
