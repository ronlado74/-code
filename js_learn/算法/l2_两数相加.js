var addTwoNumbers = function(l1, l2) {
  let carry = 0
  let l3 = new ListNode()
  let p = l3
  while(l1 || l2){
      let x = l1 ? l1.val : 0
      let y = l2 ? l2.val : 0

      let sum = x + y + carry
      let res = sum % 10
      carry = Math.floor(sum / 10)
      p.next = new ListNode(res)
      p = p.next

      if(l1){
          l1 = l1.next
      }
      if(l2){
          l2 = l2.next
      }
  }
  if(carry != 0){
      p.next = new ListNode(carry)
  }
  return l3.next
};