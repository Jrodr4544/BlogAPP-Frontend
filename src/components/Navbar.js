import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <NavLink to="posts">Posts</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <NavLink to="/about">About</NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default NavBar;