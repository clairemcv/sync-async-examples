const fs = require("fs").promises;

async function readTheFiles() {
  console.log("about to read...");
  const contents = await fs.readFile("test.txt", "utf8");
  console.log(contents);
  console.log("...done");
}

readTheFiles();
