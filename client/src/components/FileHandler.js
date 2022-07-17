import React from 'react';
import fs from 'fs';

const FileHandler = () => {
  var files = fs.readdirSync('./client/public/uploads/');
  return files;
};

export default FileHandler;
