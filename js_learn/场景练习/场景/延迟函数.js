function fn () {
  console.log('niha')
}

/* function timeout (fn, delay) {
  setTimeout(() => {
    fn()
  }, delay)
};
timeout(fn, 2000)

function sleep (fn, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn)
    }, delay)
  })
}

sleep(fn, 5000).then(res => res())
 */

function sleep2 (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

sleep2(2000).then(fn)

//具体使用
async function sleepTest () {
  fn();
  await sleep2(2000)
  console.log(2)
}
sleepTest()


