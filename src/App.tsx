import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Router from './routes';

function App() {
  return (
    <Router />
  );
}

export default App;
