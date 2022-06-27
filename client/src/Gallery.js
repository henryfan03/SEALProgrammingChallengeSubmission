import React from 'react';
import FileDisplay from './components/FileDisplay';
import './App.css';

const Gallery = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      File Upload Gallery
    </h4>
    <FileDisplay />
  </div>
);

export default Gallery;
