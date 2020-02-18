const fs = require("fs").promises;

fs.readFile("users.json")
  .then(text => {
    try {
      var obj = JSON.parse(text);
      console.log(obj);
    } catch (err) {
      console.error(err.message);
    }
  })
  .catch(err => {
    console.error(err.message);
  });
