var hasCycle = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next){
      fast = fast.next.next
      slow = slow.next
      if(fast == slow){
        return true
      }
    }
    return false
};

//使用map
var hasCycle = function(head) {
  let map = new Map()
  let p = head
  while(p){
    if(map.has(p)){
      return true
    }
    map.set(p)
    p = p.next
  }
  return false
};