const fs = require("fs").promises;

async function readTheFile() {
  try {
    const text = await fs.readFile("users.json");
    var obj = JSON.parse(text);
    console.log(obj);
  } catch (err) {
    console.error(err.message);
  }
}

readTheFile();
