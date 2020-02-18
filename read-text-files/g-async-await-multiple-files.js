const fs = require("fs").promises;

async function readTheFiles() {
  console.log("about to read...");
  const contents1 = await fs.readFile("test-1.txt", "utf8");
  console.log(contents1);
  const contents2 = await fs.readFile("test-2.txt", "utf8");
  console.log(contents2);
  const contents3 = await fs.readFile("test-3.txt", "utf8");
  console.log(contents3);
  console.log("...done");
}

readTheFiles();
