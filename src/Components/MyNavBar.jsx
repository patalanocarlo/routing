import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const MyNavbar = () => {
  const location = useLocation();


  const getPlaceholder = () => {
    if (location.pathname === '/tv-shows') {
      return 'Cerca Serie TV';
    } else {
      return 'Search';
    }
  };

  return (
    <Navbar bg="dark" variant="dark" className="d-flex align-items-center ">
      <div className='container-fluid'>
      <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
        <Nav.Link as={Link} to="/tv-shows" active={location.pathname === '/tv-shows'}>TV Shows</Nav.Link>
        <Nav.Link href="#movies" active={location.pathname === '/movies'}>Movies</Nav.Link>
      </Nav>
      <Form className="d-flex align-items-center ms-auto">
        <FormControl type="text" placeholder={getPlaceholder()} className="mr-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      </div>
    </Navbar>
  );
}

export default MyNavbar;