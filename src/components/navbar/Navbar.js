import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classes from './Navbar.module.scss';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='dark' fixed='top' dark expand='md' {...args}>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className={classes.navbar} navbar>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#about'>About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#benefits'>Benefits</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#portfolio'>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#cta'>Work with me</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
