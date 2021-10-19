var reverseList = function(head) {
  let arr = []
  let p = head
  while(p){
    arr.push(p.val)
    p = p.next
  }
  arr.reverse()
  let l1 = new ListNode()
  let i = 0
  let p1 = l1
  while(i < arr.length){
    p1.next = new ListNode(arr[i])
    p1 = p1.next
  }
  return l1.next
};