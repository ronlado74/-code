var reverseBetween = function(head, left, right) {
  let arr = []
  let arr1 = []
  let p = head
  while(p){
    arr.push(p.val)
    p = p.next
  }

  for(let i = left - 1; i < right; i++){
    arr1.push(arr[i])
  }
  arr1.reverse()
  arr.splice(left-1,right-left+1,arr1)

  let s = arr.flat()

  p = head
  let i = 0
  while(p){
    p.val = s[i]
    p = p.next
    i++
  }
  return head
};