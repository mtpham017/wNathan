import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import './components/Scrollbar.css';
import Home from './Home.jsx'
import Trips from './Trips.jsx'
import Albums from './Albums.jsx'
import Cinema from './Cinema.jsx'
import './App.css';



function App() {

  return (
    <Router>
      <Navbar />
          <Routes> {/* Wrap Route components in Routes */}
            <Route path="/" element={<Home/>}/>
            <Route path ="/trips" element={<Trips/>}/>
            <Route path ="/albums" element={<Albums/>}/>
            <Route path ="/cinema" element={<Cinema/>}/>

          </Routes>
    
    </Router>
  );
}

export default App;


