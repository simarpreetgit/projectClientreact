import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';



const Header = (props) => {

  
  return (
   <Navbar bg="primary" variant="dark" style={{ height: 60 }}>
  <Container>
 <Navbar.Brand>

Singh👑 Restaurant

</Navbar.Brand>
<Navbar.Text className='search'>
</Navbar.Text>
<Nav >
🛒
<Badge>{0}</Badge>
</Nav>
  </Container>
   </Navbar>



  )
}

export default Header
