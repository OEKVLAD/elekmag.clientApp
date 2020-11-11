import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export function Header() {

  return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">ELEMAG электроника</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/o-nas">О нас</Nav.Link>
            <Nav.Link href="/blog">Блог</Nav.Link>
            <Nav.Link href="/contacts">Контакт</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
  );
}
