// let obj = { fun: fun }
// let fun1 = obj.fun
// fun1()

let fun = function () {
  console.log(this)
}
let obj = {}
obj.fun = fun
obj.fun()