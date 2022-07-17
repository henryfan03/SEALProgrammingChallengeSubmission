const fs = require('fs');
const express = require('express');

// For todays date;
Date.prototype.today = function () {
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

function logFile(fileName) {
  fs.readFile('./logs.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {

    try {
      entry = JSON.parse(data);
    }
    catch {
      var entry = {
         uploadedFiles: []
      };
    }

    let uploadTime = new Date().today() + " " + new Date().timeNow();

    entry.uploadedFiles.push({filename: fileName, uploadtime: uploadTime});

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
