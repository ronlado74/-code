let head = [1, 2, 3, 4, 5];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  //定指针前驱阶段为null，将head指向cur
  let pre = null;
  let cur = head;
  //循环遍历cur，当cur的指向为null时停止循环
  while (cur != null) {
    //记录第一个节点的next节点，防止cur.next指向pre时，丢失原本的next
    let next = cur.next;
    //将cur.next指向pre
    cur.next = pre;

    //向后移动指针
    pre = cur;
    cur = next;
  }
  return pre;
};
