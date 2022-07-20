let arr = [1, 3, 2, 6, 5]
//时间复杂度O（nlog2n）,空间复杂度O(n),不稳定
function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pIndex = Math.floor(arr.length / 2)
  let p = arr.splice(pIndex, 1)[0]
  let right = []
  let left = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < p) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([p], quickSort(right))
}

console.log(quickSort(arr))

/* //深拷贝
function recution(arr){
  let out = [], len = arr.length
  for(let i = 0; i < len; i++){
    if(arr[i] instanceof Array){
      out.push(recution(arr[i]))
    }else{
      out.push(arr[i])
    }
  }
  return out
}
let out = recution(arr)
console.log(arr) */

/* //防抖
function de(fn,wait){
  let timer = null
  return function(){
    let context = this,
    args = [...arguments]
    if(timer){
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

//节流
function t(fn, delay){
  let preTime = Date.now()
  return function(){
    let context = this,
    args = [...arguments]
    let nowTime = Date.now()
    if(nowTime - preTime > delay){
      nowTime = Date.now()
      return fn.apply(context, args)
    }
  }
}

//ajax
let xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.onreadystatechange = function(){
  if(this.readyState != 4) return
  if(this.status == 200){
    handel(this.response)
  }else{
    console.error(this.statusText)
  }
}
xhr.error = function(){
  console.error(this.statusText)
}
xhr.send(null) */

let arr1 = [[1], [2, 3], [[4]], 5]
let arr2 = arr1.flat(Infinity)
console.log(arr2)


//实现add()
function add (a) {
  function s (b) {
    return a = a + b
  }
  s.toString = function () {
    return a
  }
  return s
}
console.log(add(1)(2))