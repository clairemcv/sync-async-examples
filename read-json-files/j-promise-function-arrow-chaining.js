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

fs.readFile("users.json")
  .then(readSuccessArrow)
  .catch(readFailArrow);
