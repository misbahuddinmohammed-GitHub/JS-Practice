// "use strict";
console.log("Hello World I love you Eram");

function x() {
  console.log(this);
}
x();
// window.x();
// console.log(this);

// The work of "this" keyword inside an object
const obj = {
  names: "Eram & Misbah",
  marriedStatus: function () {
    console.log(this);
  },
};
obj.marriedStatus();

const obj2 = {
  loveName: "Eram Tahseen",
  love: function () {
    console.log(this.loveName);
  },
};

obj2.love();

const obj3 = {
  loveName: "Md Misbahuddin",
};

obj2.love.call(obj3);

// The work of "this" inside an arrow function

const obj4 = {
  xyz: "Misbah",
  age: () => {
    console.log(this);
  },
};
obj4.age();

const obj5 = {
  a: "20",
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj5.x();
