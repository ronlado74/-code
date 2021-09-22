//哈希表
var detectCycle = function (head) {
  var map = new Map()
  while (head) {
    if (map.has(head)) {
      return head
    }
    map.set(head)
    head = head.next
  }
  return null
}

//快慢指针
var detectCycle = function (head) {
  let fast = head
  let slow =head
  let temp = head 
  while(fast && fast.next){
    /* fast指针每次走两步，slow指针每次走一步
    如果相遇，代表有环*/
    fast = fast.next.next
    slow = slow.next
    /* 当相遇时，新建一个指针，如果新指针temp和slow相遇，代表这个位置就是起始位置 */
    if(fast == slow){
      while(temp != slow){
        slow = slow.next
        temp = temp.next
      }
      return temp
    }
  }
  return null
}
