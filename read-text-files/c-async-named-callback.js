const fs = require("fs");

const readFunc = function(err, contents) {
  console.log(contents);
};

function readTheFiles() {
  console.log("about to read...");
  fs.readFile("test.txt", "utf8", readFunc);
  console.log("...done");
}

readTheFiles();
