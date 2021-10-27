console.log('script start');

setTimeout(function() {
  console.log('timeout1');
}, 0);

new Promise(resolve => {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('then1')
    setTimeout(function() {
      console.log('p_timeout1');
    }, 0);
}).then(
  function() {
    console.log('then2')
  }
)

new Promise(resolve => {
  console.log('promise2');
  resolve();
}).then(function() {
  console.log('then2_1')
}).then(
function() {
  console.log('then2_2')
}
)

console.log('script end');




async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log('timer1')
  }, 0)
}
async function async2() {
  setTimeout(() => {
    console.log('timer2')
  }, 0)
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log('timer3')
}, 0)
console.log("start")