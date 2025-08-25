import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // ensure Bootstrap CSS is loaded

class App extends Component {
  render() {
    console.log('Host URL ' + process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Simple React App</h1>
          </header>

          <Routes>
            <Route path="/" element={<Navigate to="/customerlist" replace />} />
            <Route path="/customerlist" element={<Customers />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
