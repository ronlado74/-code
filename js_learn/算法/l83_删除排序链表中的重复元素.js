var deleteDuplicates = function(head) {
  let arr = [] 
  let p = head
  while(p){
    arr.push(p.val)
    p = p.next
  }
  let set = new Set(arr)
  let arr2 = [...set]
  let res = new ListNode()
  let p1 = res
  let i = 0
  while(i < arr2.length){
    p1.next = new ListNode(arr2[i])
    p1 = p1.next
    i++
  }
  return res.next
};