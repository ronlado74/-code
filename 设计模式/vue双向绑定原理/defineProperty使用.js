let obj = {}
let val = 'sss'
Object.defineProperty(obj, 'key', {
  get () {
    console.log('读取成功')
    return val
  },
  set (newVal) {
    val = newVal
    console.log('设置成功xs')
  }
})
console.log(obj.key)
obj.key = '2222x'
