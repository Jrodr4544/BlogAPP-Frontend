import React from 'react';
import { Nav } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <Nav fill bg="dark" variant="tabs" >
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <NavLink to="/">
              Home  
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <NavLink to="/posts">
              Posts
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <NavLink to="/new_post">New Post</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4"> 
            <NavLink to="/about">
              About
            </NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default NavBar;