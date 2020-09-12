import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './navbar.scss';

export default () => {
  return <div className="NavBar">
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Lean PDF Editor</Navbar.Brand>
    </Navbar>
  </div>;
}
