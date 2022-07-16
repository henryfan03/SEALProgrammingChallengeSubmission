import React from 'react';
import fs from 'fs';

const FileHandler = () => {
  var files = fs.readdirSync('./client/public/uploads/');
  console.log(files);
};

export default FileHandler;
