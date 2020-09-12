import React from 'react';
import Navbar from "react-bootstrap/Navbar";

import './Navbar.scss';

export default () => {
  return <div className="NavBar">
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Lean PDF Editor</Navbar.Brand>
    </Navbar>
  </div>;
}
