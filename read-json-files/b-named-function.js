const fs = require("fs");

function readFileSimple(error, text) {
  if (error) {
    console.error(error.message);
  } else {
    try {
      var obj = JSON.parse(text);
      console.log(obj);
    } catch (e) {
      console.error(err.message);
    }
  }
}

fs.readFile('users.json', readFileSimple)
