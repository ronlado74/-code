const arr = [
  { id: 1, parentId: null, name: 'a' },
  { id: 2, parentId: null, name: 'b' },
  { id: 3, parentId: 1, name: 'c' },
  { id: 4, parentId: 2, name: 'd' },
  { id: 5, parentId: 1, name: 'e' },
  { id: 6, parentId: 3, name: 'f' },
  { id: 7, parentId: 4, name: 'g' },
  { id: 8, parentId: 7, name: 'h' },
]

function array2Tree (arr) {
  if (!Array.isArray(arr) || !arr.length) return

  let obj = {}
  arr.forEach(item => obj[item.id] = item)
  // for (let k of arr) {
  //   obj[k.id] = k
  // }

  let root = []
  arr.forEach(item => {
    const parent = obj[item.parentId]
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      root.push(item)
    }
  })
  return root
}

console.log(array2Tree(arr))