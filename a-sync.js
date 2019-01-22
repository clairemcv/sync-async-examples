const fs = require("fs");

function readTheFiles() {
  console.log("about to read...");
  const contents = fs.readFileSync("test.txt", "utf8");
  console.log(contents);
  console.log("...done");
}

readTheFiles();
