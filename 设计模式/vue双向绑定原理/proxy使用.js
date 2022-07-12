let arr = [1, 2, 3]
let obj = {}
let proxy = new Proxy(obj, {
  get (target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  }
})

proxy.c = 4
console.log(obj)
