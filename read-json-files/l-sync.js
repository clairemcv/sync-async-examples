const fs = require("fs");

function readTheFile() {
  const text = fs.readFileSync("users.json")
  var obj = JSON.parse(text);
  console.log(obj);
}

readTheFile();
