//setTimeout(callback,dely)

console.log("start");

setTimeout(() => {
  console.log("hi hello");
}, 2000);
console.log("stop");

//setInterval(callback,delay)

let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`count ${count}`);
  if (count <= 5) {
    console.log("world");
    clearInterval(intervalId);
  }
}, 1000);
