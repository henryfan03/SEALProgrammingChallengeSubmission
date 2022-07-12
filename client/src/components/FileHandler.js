import React from 'react';

const FileHandler = ( filename ) => {
  fileExtension = filename.slice(filename.length-3,filename.length);
  return fileExtension;
}

module.exports = FileHandler;
