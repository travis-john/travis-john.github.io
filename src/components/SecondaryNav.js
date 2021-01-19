import React, { useState} from 'react';
import { Container, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const SecondaryNav = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <Container>
        <NavbarBrand href='/'>Travis John</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/*<NavItem>
              <NavLink className='mx-2' href="/resume">Resumé</NavLink>
            </NavItem>*/}
            <NavItem>
              <NavLink href='/design'>Design</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/development'>Development</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default SecondaryNav;
