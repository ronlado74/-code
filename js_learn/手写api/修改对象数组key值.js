//修改key
const arr = [{
  id: 0,
  name: 'wang'
}, {
  id: 1,
  name: 'fan'
}]

const newArr = arr.map(item => {
  return {
    newId: item.id,
    newName: item.name
  }
})

console.log(newArr, 'newArr')