function mySetInterval () { //注意只能使用function构造，不能使用箭头函数
  console.log(arguments, '2222222')
  mySetInterval.timer = setTimeout(() => {
    arguments[0]()
    mySetInterval(...arguments)
  }, arguments[1])
}

mySetInterval.clear = () => {
  clearTimeout(mySetInterval.timer)
}

mySetInterval(() => {
  console.log(111111)
}, 1000)

