// start string length "task 1"
const stringLength = (name1) => {
  if (name1.length >= 1 && name1.length <= 10) {
    return name1.length;
  }
};
// end string length "task 1"

// start string reverse "task 2"
const stringReverse = (name2) => {
  let reversed = name2.split("").reverse().join("");
  return reversed;
};
// end string reverse "task 2"
// start calculator "task 3"
class calcs {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiple(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}
// end calculator "task 3"

// start string capitalize "task 4"
const stringCapitalize = (name3) => {
  let capitalized = name3[0].toUpperCase() + name3.slice(1);
  return capitalized;
};
// end string capitalize "task 4"
module.exports = { stringLength, stringReverse, calcs, stringCapitalize };
