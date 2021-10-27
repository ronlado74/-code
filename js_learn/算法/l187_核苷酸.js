s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'

function h1(s){
  let res = []
  let map = new Map()
  if(!s || s.length < 10) return [];
  for(let i = 0; i <= s.length - 10; i++){
    const str = s.substr(i, 10);
    if(map.has(str)){
      let n = map.get(str)
      n = n + 1
      map.set(str, n)
    }else{
      map.set(str, 1)
    }
  }
  let max = 2
  for(let value of map.values()){
    if(value >= max){
      max = value
    }
  }
  for(let item of map){
    if(item[1] == max){
      res.push(item[0])
    }
  }
  return res
}

console.log(h1(s))


function h2(s){
  let res = []
  let o = {}
  for(let i = 0; i < s.length - 10; i++){
    let str = s.substr(i, 10)
    if(o[str]){
      o[str]++
    }else{
      o[str] = 1
    }
  }
  let max = 2
  for(let key in o){
    if(o[key] >= max){
      max = o[key]
    }
  }
  for(let key in o){
    if(o[key] == max){
      res.push(key)
    }
  }
  return res
}
console.log(h2(s))