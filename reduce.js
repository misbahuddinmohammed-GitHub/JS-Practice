// First doing the normal process without using the reduce function

const arr1 = [5, 1, 3, 2, 6];

function FindSum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  return sum;
}
console.log(FindSum(arr1));

// Now using reduce function

const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);

// Another example using reduce for finding MAX

const arr2 = [5, 1, 3, 2, 6];

const output1 = arr2.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output1);

// Another example using reduce function (To find the least number)

const arr3 = /*[5, 1, 3, 2, 6];*/ [99, 95, 87, 64, 200];

const output2 = arr3.reduce(function (min, curr) {
  if (curr < min) {
    min = curr;
  }
  return min;
});
console.log(output2);

// Updated example of Reduce Function (tougher one)

const users = [
  { firstName: "Md", lastName: "Misbahuddin", age: 23 },
  { firstName: "Shah Rukh", lastName: "Khan", age: 58 },
  { firstName: "Elon", lastName: "Musk", age: 60 },
  { firstName: "Eram", lastName: "Tahseen", age: 23 },
];

const output3 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output3);
