import React, { Fragment, useState } from 'react';
import FileUpload from './FileUpload';
import fs from 'fs';
import axios from 'axios';

const FileDisplay = () => {
  const dir = fs.opendirSync();
  let dirent;
  while ((dirent = dir.readSync()) !== null) {
    console.log(dirent.name);
  }
  dir.closeSync();
};

export default FileDisplay;
