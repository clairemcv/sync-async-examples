const fs = require("fs").promises;

const readSuccessArrow = text => {
  try {
    var obj = JSON.parse(text);
    console.log(obj);
  } catch (err) {
    console.error(err.message);
  }
};

const readFailArrow = err => {
  console.error(err.message);
};
const promise = fs.readFile("users.json");

promise.then(readSuccessArrow);
promise.catch(readFailArrow);
