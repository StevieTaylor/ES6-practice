console.log('-------------------Promise的3种状态-------------------');

let promise1 = new Promise((resolve, reject) => resolve(1));
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(3), 1000);
});
console.log(promise1);
console.log(promise2);
console.log(promise3);
setTimeout(() => console.log(promise2), 2000);
setTimeout(() => console.log(promise3), 2000);
promise1.then((v) => {
  console.log(v);
});
promise2.then((v) => {
  console.log(v);
});
promise3.catch((v) => {
  console.log(v);
});
