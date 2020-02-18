const fs = require("fs");

fs.readFile("users.json", (error, text) => {
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
});
