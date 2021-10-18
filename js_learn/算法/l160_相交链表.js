var getIntersectionNode = function(headA, headB) {
  let p_A = headA
  while(p_A){
      let p_B = headB
      while(p_B){
          if(p_A == p_B){
              return p_A
          }
          p_B = p_B.next
      }
      p_A = p_A.next;
  }
  return null
};

var getIntersectionNode = function(headA, headB) {
  let map = new Map()
  while(headA){
    map.set(headA)
    headA = headA.next
  }
  while(headB){
    if(map.has(headB)){
      return headB
    }
    map.set(headB)
    headB = headB.next
  }
  return null
};