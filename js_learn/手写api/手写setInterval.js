function mySetInterval () {
  console.log(arguments, '2222222')
  mySetInterval.timer = setTimeout(() => {
    console.log(arguments, '11111111111')
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


const test = () => {
  console.log(arguments)
}

test(1, 23)

function test2 () {
  console.log(arguments)
}
test2(4, 5)