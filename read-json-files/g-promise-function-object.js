const fs = require("fs").promises;

const readSuccess = function(text) {
  try {
    var obj = JSON.parse(text);
    console.log(obj);
  } catch (err) {
    console.error(err.message);
  }
};

const readFail = function(err) {
  console.error(err.message);
};

const promise = fs.readFile("users.json");

promise.then(readSuccess);
promise.catch(readFail);
