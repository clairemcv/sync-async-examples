const fs = require("fs");

function readTheFile() {
  try {
    const text = fs.readFileSync("users.json");
    var obj = JSON.parse(text);
    console.log(obj);
  } catch (err) {
    console.error(err.message);
  }
}

readTheFile();
