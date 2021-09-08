const test1 = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};


Object.prototype.map = function(fn){
  const obj = this;
  const result = {};
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
      const item = fn(key,obj[key]);
      result[key] = item;
    }
  }
  return result
}

let r = test1.map((key, value) => {
  return ++value
})
console.log(r)
