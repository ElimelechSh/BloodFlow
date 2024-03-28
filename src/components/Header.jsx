import React from 'react'

import { NavLink } from 'react-router-dom';
import {Container ,Navbar,Nav, Button} from 'react-bootstrap';

import '../stayle/stayle.css'

const Header = (params) => {




  
  return (
    <>


<div class="container-fluid bg-primary-subtle h-25">

<div class="d-flex justify-content-center">
  <img width="150" height="120" src="../imges/logo_transparent.png" class="attachment-large size-large m-auto" alt="" loading="lazy" />
 
</div>

</div>




 <Navbar bg="secondary" expand="lg" className="header py-2" dir="rtl">
    <Container fluid>
      <Navbar.Brand href="/">
        {params.title}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <NavLink className="link nav-link mx-3" to="/">
            בית
          </NavLink>
          <NavLink className="link nav-link mx-3" to="/Ubuot">
            אודות
          </NavLink>
          <NavLink className="link nav-link mx-3" to="/Galery">
            גלרית ירקות
          </NavLink>
          {/* <NavLink className="link nav-link mx-3" to="/products">
            המוצרים שלנו
          </NavLink> */}
          <NavLink className="link nav-link mx-3" to="/Qewtshtion">
            שו"ת
          </NavLink>

          <NavLink className="link nav-link mx-3" to="/from">
            צור קשר
          </NavLink>
          
        </Nav>
     
      </Navbar.Collapse>

      

     
      <Button className='p-2' href="" onClick={() => alert("אין לך איזור אישי")} >
      
  לאזור האישי
</Button>
    </Container>
  </Navbar> 
  </>
  )
}

export default Header