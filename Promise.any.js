const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fails");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 6000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });

// If all the promises in the array gets rejected then it will give an array of aggregate error.
// Below is the example of the code

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P4 Success");
  }, 5000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P5 Fails");
  }, 3000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P6 Success");
  }, 6000);
});

Promise.any([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
