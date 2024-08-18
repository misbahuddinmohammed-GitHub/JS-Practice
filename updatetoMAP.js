const arr = [5, 1, 3, 2, 6];

// Double = [10,2,6,4,12]
// Triple = [15,3,9,6,12]
// Binary = ["101","1","11","10","110"]

function double(x) {
  return x * 2;
}
const output1 = arr.map(double);
console.log(output1);

function triple(x) {
  return x * 3;
}

const output2 = arr.map(triple);
console.log(output2);

function binary(x) {
  return x.toString(2);
}

const output3 = arr.map(binary);
console.log(output3);

//  Just doing it in an another away

const output4 = arr.map(function (x) {
  return x * 4;
});
console.log(output4);

// Using arrow functions

const output5 = arr.map((x) => x * 4);
console.log(output5);

// Updated use of the MAP function (tougher one)

const users = [
  { firstName: "Eram", lastName: "Tahseen", age: 23 },
  { firstName: "Shah Rukh", lastName: "Khan", age: 58 },
  { firstName: "Elon", lastName: "Musk", age: 60 },
  { firstName: "Md", lastName: "Misbahuddin", age: 23 },
];

const output6 = users.map((x) => x.firstName + " " + x.lastName);
console.log(output6);
