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

function arr2Tree (arr) {
  if (!arr.length) return

  let obj = {}
  arr.forEach(item => {
    obj[item.id] = item
  });

  console.log(arr)
}

arr2Tree(arr)
console.log(obj)