import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = ({setShow,size}) => {

  
  return (

    <Navbar bg="primary " expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={()=>setShow(true)} href="/">Singh👑 Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          </Nav>
          <Nav.Link  onClick={()=>setShow(false)}>🛒<Badge>{size}</Badge></Nav.Link>
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

)
}

// {/* <Navbar bg="primary" variant="dark">
//     <Container>
//       <Navbar.Brand onClick={()=>setShow(true)} href="/">Singh👑 Restaurant</Navbar.Brand>
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Signup</Nav.Link>
//         </Nav>
    

//         <Nav.Link  href="#home">Logout</Nav.Link>
        
//     </Container>
//   </Navbar> */}
// //    {/* <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
//   <Container>
//  <Navbar.Brand onClick={()=>setShow(true)}>
// <Link> 
// Singh👑 Restaurant
// </Link>
// <Link  to ='Signup'>Signup</Link>
// </Navbar.Brand>
// <Navbar.Text className='search'>
// </Navbar.Text>

// <Link> <Nav onClick={()=>setShow(false)}>
// 🛒
// <Badge>{size}</Badge>
// </Nav>
// </Link>
//   </Container>
//    </Navbar> */}



export default Header
