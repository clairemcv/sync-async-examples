const fs = require("fs");

const readFileFunc = function(error, text) {
  if (error) {
    console.error(error.message);
  } else {
    try {
      var obj = JSON.parse(text);
      console.log(obj);
    } catch (err) {
      console.error(err.message);
    }
  }
};

fs.readFile('users.json', readFileFunc);
