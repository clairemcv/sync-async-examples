const fs = require("fs");

function readTheFiles() {
  console.log("about to read...");
  fs.readFile("test-1.txt", "utf8", function(err, contents) {
    console.log(contents);
  });
  fs.readFile("test-2.txt", "utf8", function(err, contents) {
    console.log(contents);
  });
  fs.readFile("test-3.txt", "utf8", function(err, contents) {
    console.log(contents);
  });
  console.log("...done");
}

readTheFiles();
