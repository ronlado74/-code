let a1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
let a2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2)
  }, 2000)
})
let a3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})

async function getValue (a1, a2, a3) {
  try {
    let res1 = await a1
    let res2 = await a2
    let res3 = await a3
    console.log(res3)
  } catch (error) {
    console.log(error, '错误')
  }
}


async function getValue2 (a1, a2, a3) {
  return new Promise((resolve, reject) => {
    let res = []
    a1.then(val => {
      res.push(val)
      a2.then(val => {
        res.push(val)
        a3.then(val => {
          res.push(val)
          resolve(res)
        }, error => {
          reject(error)
        })
      }, error => {
        reject(error)
      })
    }, error => {
      reject(error)
    })
  })
}
getValue2(a1, a2, a3).then(val => { console.log(val) }, error => { console.log(error) })