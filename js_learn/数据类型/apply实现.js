Function.prototype.myApply = function () {
  let thisArg = arguments[0]
  const isStrict = (function () { return this === undefined }())
  if (!isStrict) {
    let thisArgType = typeof thisArg
    if (thisArgType === 'number') {
      thisArg = Number(thisArg)
    } else if (thisArgType === 'string') {
      thisArg = new String(thisArg)
    } else if (thisArgType === 'boolean') {
      thisArg = new Boolean(thisArg)
    }
  }
  const invokeParams = arguments[1]
  const invokeFunc = this
  if (thisArg === null || thisArg === undefined) {
    return invokeFunc(...invokeParams)
  }
  thisArg.invokeFunc = invokeFunc
  const result = thisArg.invokeFunc(...invokeFunc)
  delete thisArg.invokeFunc
  return result
}

//测试
console.log(Math.max.myApply(null, [1, 2, 4, 8]));