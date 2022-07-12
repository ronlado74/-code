let obj = {
  name: 'wxy',
  age: 18
}

function defineProperty (obj, key, val) {
  Object.defineProperty(obj, key, {
    get () {
      //读取
      console.log('读取val')
      return val
    },
    set (newVal) {
      //设置
      if (newVal === val) return
      observer(newVal)
      console.log('监听设置成功', newVal)
      val = newVal
    }
  })
}

function observer (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  for (const key in obj) {
    defineProperty(obj, key, obj[key])
  }
}

observer(obj)
obj.name = 'wwh'
