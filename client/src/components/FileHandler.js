import React from 'react';
import fs from 'fs';

const FileHandler = () => {
  var files = fs.readdir('./client/public/uploads/');
  return files;
};

export default FileHandler;
