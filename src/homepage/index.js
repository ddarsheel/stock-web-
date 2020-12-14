import React from 'react'
import './index.css'
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
const Head =(props)=>{
    return(
        <div className ="ger">
            <Navbar bg="light" expand="xl">
             <img src={process.env.PUBLIC_URL+"/image/bull.PNG"}
            alt="logo" height="75px" width="115px"></img>
  <Navbar.Brand href="#home">STOCKER PLACE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="hm">
    <img src={process.env.PUBLIC_URL+"/image/bull.PNG"}
            alt="logo" height="75px" width="115px"></img>
      <NavLink to="/">HOME </NavLink>
      <NavLink to="/ss"> STOCK</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Head;
