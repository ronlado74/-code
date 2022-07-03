//当e后的数字小于-6
function transferToNumber(inputNumber ){
  if (isNaN(inputNumber)) {
    return inputNumber
  }
  inputNumber = '' + inputNumber
  inputNumber = parseFloat(inputNumber)
  let eformat = inputNumber.toExponential() // 转换为标准的科学计数法形式（字符串）
  let pos = eformat.indexOf('e')
  let baseValue = eformat.substr(0, pos)
  let power = eformat.substr(pos + 1)
  let bitNumber = 0
  pos = baseValue.indexOf('.')
  if (pos === -1) {
    bitNumber = 0 - power
  } else {
    let float = baseValue.substr(pos + 1)
    bitNumber = float.length - power
  }
  let number = inputNumber.toFixed(Math.max(0, bitNumber))
  return number
}

//当数过大时，例如100000000000000000，使用bigInt
let a = 1000000000000000n
a.toString()  //1000000000000000