import React from 'react';
import FileUpload from './FileUpload';
import Carousel from 'better-react-carousel';
import fs from 'fs';
import axios from 'axios';

const FileDisplay = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="../../thumbnails/logopdf.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="../../thumbnails/icontxt.png" />
      </Carousel.Item>
      // <Carousel.Item>
      //   <img width="100%" src="https://picsum.photos/800/600?random=3" />
      // </Carousel.Item>
      // <Carousel.Item>
      //   {/* anything you want to show in the grid */}
      // </Carousel.Item>
      // {/* ... */}
    </Carousel>
  )
};

export default FileDisplay;
