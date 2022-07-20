function allSettled (promises) {
  return new Promise((resolve, reject) => {
    const result = []
    let count = 0

    promises.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = {
          status: 'fulfilled',
          value
        }
        count++
        if (count === promises.length) {
          resolve(result)
        }
      }, (reason) => {
        result[index] = {
          status: 'rejected',
          reason
        }
        count++
        if (count === promises.length) {
          resolve(result)
        }
      })
    })
  })
}

function myRace (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

function myAll (promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let result = []
    for (let i = 0; i < promises.length; i++) {
      // Promise.resolve(
      promises[i].then(val => {
        result[i] = val
        count++
        if (count === promises.length) {
          return resolve(result)
        }
      }, error => {
        return reject(error)
      })
      // )
    }
  })
}

function myAll2 (promises) {
  return new Promise((resolve, reject) => {
    const result = []
    let count = 0

    promises.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = value
        count++
        if (count === promises.length) {
          resolve(result)
        }
      }, (reason) => {
        return reject(reason)
      })
    })
  })
}

function myAllSettled (promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let result = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(val => {
        count++
        result[i] = {
          status: 'fulfilled',
          val
        }
        if (count === promises.length) {
          return resolve(result)
        }
      }, error => {
        count++
        result[i] = {
          status: 'rejected',
          error
        }
        if (count === promises.length) {
          return resolve(result)
        }
      })
    }
  })
}



let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})

allSettled([p3, p1, p2]).then(res => {
  console.log(res)
})


myAll([p3, p1, p2]).then(res => {
  console.log(res)
})

myAllSettled([p3, p1, p2]).then(res => {
  console.log(res)
})



