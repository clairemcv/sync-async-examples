const fs = require("fs").promises;

async function readTheFile() {
  const text = await fs.readFile("users.json")
  var obj = JSON.parse(text);
  console.log(obj);
}

readTheFile();
