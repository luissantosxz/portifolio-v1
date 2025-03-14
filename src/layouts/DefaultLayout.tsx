import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Outlet />
    </div>
  );
}

export default App;
