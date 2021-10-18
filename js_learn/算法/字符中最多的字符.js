let str = 'aaabbcc'
let o = {}
for(let i = 0; i < str.length; i++){
  let char = str[i]
  if(o[char]){
    o[char]++
  }else{
    o[char] = 1
  }
}
console.log(o)
let max = 0
for(let key in o){
  if(o[key] >= max ){
    max = o[key]
  }
}
let word = ''
for(let key in o){
  if(o[key] == max){
    word = key
  }
}
console.log(word + max)