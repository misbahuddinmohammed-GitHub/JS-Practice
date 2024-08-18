const arr = [5, 1, 3, 2, 6];

function OddFindOut(x) {
  return x % 2;
}
const output = arr.filter(OddFindOut);
console.log(output);

function EvenFindOut(x) {
  return x % 2 == 0;
}

const output1 = arr.filter(EvenFindOut);
console.log(output1);

function GreaterThanFour(x) {
  return x > 4;
}

const output2 = arr.filter(GreaterThanFour);
console.log(output2);

// Using chain functions with the FILTER function and MAP function

const users1 = [
  { firstName: "Md", lastName: "Misbahuddin", age: "23" },
  { firstName: "Eram", lastName: "Tahseen", age: "23" },
  { firstName: "Shah Rukh", lastName: "Khan", age: "58" },
  { firstName: "Elon", lastName: "Musk", age: "60" },
];

const output3 = users1.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output3);

// Trying to use the above code without using the FILTER function and MAP function and try to doi it with REDUCE
// function

const users = [
  { firstName: "Md", lastName: "Misbahuddin", age: "23" },
  { firstName: "Eram", lastName: "Tahseen", age: "23" },
  { firstName: "Shah Rukh", lastName: "Khan", age: "58" },
  { firstName: "Elon", lastName: "Musk", age: "60" },
];

const output4 = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output4);
