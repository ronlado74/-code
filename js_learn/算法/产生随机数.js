function fn(n){
  let arr = []
  if(n > 32){
    return arr
  }
  for(let i = 0; i < n; i++){
    let r = Math.floor(Math.random() * 32)
    if(arr.indexOf(r) != -1){
      i--
    }else{
      arr.push(r)
    }
  }
  return arr
}



function fn2(n){
  let arr = []
  let map = new Map()
  if(n > 32){
    return arr
  }
  for(let i = 0; i < n; i++){
    let r = Math.floor(Math.random() * 32)
    if(map.has(r)){
      i--
    }else{
      map.set(r,r)
      arr.push(r)
    }
  }
  return arr
}


let str = 'aaabbc'
let o = {}
let max = 0
function fn3(str){
  for(let i = 0; i < str.length; i++){
    let s = str[i]
    if(o[s]){
      o[s]++
    }else{
      o[s] = 1
    }
  }
  for(key in o){
    if(o[key] >= max){
      max = o[key]
    }
  }
  let word = ''
  for(key in o){
    if(o[key] === max){
      word = key
    }
  }
  return word + max
}


let set = new Set()
set.add(1)
set.add(1)
set.delete(1)
console.log([...set].length)
