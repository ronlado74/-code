var mergeKLists = function(lists) {
  let arr = []
  for(let i = 0; i < lists.length; i++){
    while(lists[i]){
      arr.push(lists[i].val)
      lists[i] = lists[i].next
    }
  }
  arr.sort((a,b) => a -b)
  console.log(arr)
  if(!arr.length){
    return null
  }else{
    let l2 = new ListNode()
    let p2 = l2
    for(let i = 0; i < arr.length; i++){
      p2.next = new ListNode(arr[i])
      p2 = p2.next
    }
    return l2.next
  }
};