// PromiseAll Success Case = PromiseAllSettled Success Case(is same as promise.all only difference is that even ...
// if a error comes in the promise of array, it will wait for others to resolve------------
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fails");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 success");
  }, 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
