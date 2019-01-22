const fs = require("fs");

function readTheFiles() {
  console.log("about to read...");
  fs.readFile("test.txt", "utf8", function(err, contents) {
    console.log(contents);
  });
  console.log("...done");
}

readTheFiles();
