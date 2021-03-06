import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const Main = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      &#128193; SEAL Programming Challenge
    </h4>
    <FileUpload />
  </div>
);

export default Main;
