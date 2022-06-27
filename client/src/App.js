import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Main from './Main';
import Gallery from './Gallery';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
