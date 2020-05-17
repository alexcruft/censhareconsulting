import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let the fun begin.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
