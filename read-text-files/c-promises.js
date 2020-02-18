const fs = require("fs").promises;

function readTheFiles() {
  console.log("about to read...");
  fs.readFile("test.txt", "utf8").then(function (contents) {
    console.log(contents);
  });
  console.log("...done");
}

readTheFiles();
