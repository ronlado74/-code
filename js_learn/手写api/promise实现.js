//自己身上有all、reject、resolve这几个眼熟的方法，原型上有then、catch等同样很眼熟的方法。
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise (fn) {
  //保存初始化状态
  let self = this
  //初始化状态
  this.state = PENDING
  //保存resolve或者reject传入的值
  this.value = null
  //保存resolve的回调函数
  this.resolveCallbacks = []
  //保存reject的回调函数
  this.rejectCallbacks = []

  //状态转变为 resolved 方法
  function resolve (value) {
    //判断传入的值是否是promise，如果是，则状态改变必须等待前一个状态改变后再进行改变
    if (value instanceof MyPromise) {
      return value.then(resolve, reject)
    }
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      //只有state的状态为'pending'可改变状态
      if (self.state === PENDING) {
        //修改状态
        self.state = RESOLVED
        //修改传入的值
        self.value = value
        //执行回调函数
        self.resolveCallbacks.forEach(callback => callback(value))
      }
    })
  }

  //状态改变为 rejected 方法
  function reject (value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED
        self.value = value
        self.rejectCallbacks.forEach(callback => callback(value))
      }
    })
  }

  //将两个方法传入执行函数fn
  try {
    fn(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

MyPromise.prototype.then = (onResolved, onRejected) => {
  // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
  onResolved = typeof onRejected === 'function' ? onResolved : function (value) { return value }
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) { throw (err) }

  // 如果是等待状态，则将函数加入对应数组中
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved);
    this.rejectedCallbacks.push(onRejected);
  }

  // 如果状态已经凝固，则直接执行对应状态的函数
  if (this.state === RESOLVED) {
    onResolved(this.value)
  }
  if (this.state === REJECTED) {
    onRejected(this.value)
  }
}


//resolve方法
Promise.resolve = function (val) {
  return new Promise((resolve, reject) => {
    resolve(val)
  });
}
//reject方法
Promise.reject = function (val) {
  return new Promise((resolve, reject) => {
    reject(val)
  });
}
//race方法 
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    };
  })
}

//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
function promiseAll (promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolvedCounter++;
        resolvedResult[i] = value;
        if (resolvedCounter == promiseNum) {
          return resolve(resolvedResult)
        }
      }, error => {
        return reject(error)
      })
    }
  })
}
// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})

Promise.race([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})
promiseAll([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})




//测试案例
let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 500);
    });
  })
  .then(res => console.log(res));



//测试
let p4 = new Promise((resolve, reject) => {
  //做一些异步操作
  setTimeout(() => {
    console.log('执行完成');
    resolve('我是成功！！');
  }, 2000);
}).then(() => console.log(1), () => console.log(2))



