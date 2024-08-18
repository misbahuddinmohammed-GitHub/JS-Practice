const radius = [3, 1, 2, 4];

// area,circumference and diameter are the callvback functions
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// here below the calculate function is a higer order function
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

// console.log(calculate(radius, area));
// // console.log(calculate(radius, circumference));
// // console.log(calculate(radius, diameter));

// MAP is very similar to the calculate function. It works similarly. MAP is a higher order function

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));
