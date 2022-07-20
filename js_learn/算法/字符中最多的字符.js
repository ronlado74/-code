let str = 'aaabbcc'
let o = {}
for (let i = 0; i < str.length; i++) {
  let char = str[i]
  if (o[char]) {
    o[char]++
  } else {
    o[char] = 1
  }
}
/* let arr = []
for(let key in o){
  let value = key + o[key]
  arr.push(value)
}
console.log(arr.join('')) */
let max = 0
for (let key in o) {
  if (o[key] >= max) {
    max = o[key]
  }
}
let word = ''
for (let key in o) {
  if (o[key] == max) {
    word = key
  }
}
console.log(word + max)

//使用map方法
let map = new Map()
for (let i = 0; i < str.length; i++) {
  if (map.has(str[i])) {
    let n = map.get(str[i])
    n++
    map.set(str[i], n)
  } else {
    map.set(str[i], 1)
  }
}
for (let value of map.values()) {
  if (value >= max)
    console.log(value)
}
for (let item of map) {
  if (item[1] == max) {
    console.log(item)
  }
}
console.log(map)