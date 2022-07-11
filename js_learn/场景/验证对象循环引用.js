var obj = {
  a: 1,
}
obj.c = obj

const keyMap = new Map()
keyMap.set(obj, "1");
const cycle = target => {
  for (let key in target) {
    const val = target[key]
    if (keyMap.has(val)) {
      return true
    } else {
      keyMap.set(val, key)
      if (typeof val === 'object') {
        cycle(val)
      }
    }
  }
  return false
}





console.log(cycle(obj));
