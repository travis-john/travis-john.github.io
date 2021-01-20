import React, { useEffect, useState} from 'react';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from "react-scroll";

const MainNav = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  //like componentDidMount
  //when react app is loaded run this first
  useEffect(()=>{

    window.addEventListener('scroll', handleScroll);

  });

  let [scrolling, updatehandlescroll] = useState(false);

  const handleScroll = (props) => {

  window.onscroll = function() {
      if(window.pageYOffset === 0) {
        updatehandlescroll(scrolling=false)
      } else {
        updatehandlescroll(scrolling=true);
      }
    };
  }

  return (
    <>
    <BrowserView>
      <Navbar color="transparent" light fixed='top' expand="md" className={ (scrolling===true )? (`active` ): (``)}>
        <Container>
        <Link className='navbar-brand' to="page-top" spy={true} smooth={true} duration={500}>Travis John</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/*<NavItem>
              <NavLink className='mx-2' href="/resume">Resumé</NavLink>
            </NavItem>*/}
            <NavItem>
              <Link className='nav-link mx-2' activeClass="active" to="showcase" spy={true} smooth={true} duration={500} offset={-55}>Showcase</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link mx-2' activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-55}>Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </BrowserView>
    <MobileView>
    <Navbar color="light" light fixed='top' expand="md" className='active'>
      <Container>
      <Link className='navbar-brand' to="page-top" spy={true} smooth={true} duration={500}>Travis John</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {/*<NavItem>
            <NavLink className='mx-2' href="/resume">Resumé</NavLink>
          </NavItem>*/}
          <NavItem>
            <Link className='nav-link mx-2' activeClass="active" to="showcase" spy={true} smooth={true} duration={500} offset={-55}>Showcase</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link mx-2' activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-55}>Contact</Link>
          </NavItem>
        </Nav>
      </Collapse>
      </Container>
    </Navbar>
    </MobileView>
    </>
  );
}

export default MainNav;
