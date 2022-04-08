function add () {
  //将参数arguments用args保存起来
  let args = [...arguments]
  //let args = [].slice.call(arguments)
  //定义一个内部函数接受第二次传入的参数
  let inner = function () {
    args.push(...arguments)
    //使用reduce方法进行求和
    /* let sum = args.reduce((pre, cur) => {
      return pre + cur
    }) */
    //使用递归，在内部调用自己，返回一个函数字符串(此时通过toString进行了隐式转换)
    return inner
  }
  /* inner.toString = function () {
    return '我进行了隐式转换'
  } */
  inner.toString = function () {
    let sum = args.reduce((pre, cur) => {
      return pre + cur
    })
    return sum
  }
  return inner
}

console.log(add(1, 2)(3).toString())
