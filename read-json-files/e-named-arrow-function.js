const fs = require("fs");

const readFileArrow = (error, text) => {
  if (error) {
    console.error(error);
  } else {
    try {
      var obj = JSON.parse(text);
      console.log(obj);
    } catch (err) {
      console.error(err.message);
    }
  }
};

fs.readFile('users.json', readFileArrow);
