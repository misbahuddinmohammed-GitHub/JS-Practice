// PromiseAll Success Case ------------
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 success");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 success");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// PromiseAll Failure Case ------------
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 success");
  }, 3000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P5 Fails");
  }, 1000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P6 success");
  }, 2000);
});

Promise.all([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
