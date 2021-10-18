var mergeTwoLists = function(l1, l2) {
  let p1 = l1
  let p2 = l2
  let arr1 = []
  let arr2 = []
  while(p1){
    arr1.push(p1.val)
    p1 = p1.next
  }
  while(p2){
    arr2.push(p2.val)
    p2 = p2.next
  }
  let arr3 = arr1.concat(...arr2)
  console.log(arr3)
  arr3.sort((a,b) => {return(a - b)})
  //创建新链表
  let l3 = new ListNode()
  let p = l3
  for(let i = 0; i < arr3.length; i++){
    p.next = new ListNode(arr3[i]);
    p = p.next
  }
  return l3.next
};


var mergeTwoLists = function(l1, l2) {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
          prev.next = l1;
          l1 = l1.next;
      } else {
          prev.next = l2;
          l2 = l2.next;
      }
      prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};





