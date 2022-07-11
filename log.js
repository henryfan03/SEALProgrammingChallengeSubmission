const fs = require('fs');
const express = require('express');

function logFile({fileName}) {
  fs.readFile('./logs.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {

    entry = JSON.parse(data); //now it an object

    let uploadTime = new Date().toLocaleDateString()

    entry.table.push({filename: fileName, uploadtime: uploadTime});

    json = JSON.stringify(entry);

    fs.writeFile("logs.json", json, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("logs.json", "utf8"));
      }
    });
  }});

  // fs.writeFile("logs.json", json, (err) => {
  //   if (err)
  //     console.log(err);
  //   else {
  //     console.log("File written successfully\n");
  //     console.log("The written has the following contents:");
  //     console.log(fs.readFileSync("logs.json", "utf8"));
  //   }
  // });
}

module.exports = logFile;
