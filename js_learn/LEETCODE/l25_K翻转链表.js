var reverseKGroup = function (head, k) {
  let arr = [];
  let arr2 = [];
  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  //数组操作
  //将数组按照k切分
  //例如k=2 [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
  for (let i = 0; i < arr.length; i += k) {
    // 当4 + 2 > 5，只取出arr.slice(4,5)
    if (i + k <= arr.length) {
      arr2.push(arr.slice(i, i + k));
    } else {
      arr2.push(arr.slice(i, arr.length));
    }
  }
  //将数组反转
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].length == k) {
      arr2[i].reverse();
    }
  }
  //将[ [ 3, 2, 1 ], [ 4, 5 ] ]，转化为[3,2,1,4,5]
  let s = arr2.toString().split(",").map(Number);
  //将处理好的数组赋值给链表
  p = head;
  let = 0;
  while (p) {
    p.val = s[i];
    p = p.next;
    i++
  }
  return head;
};

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
// let k = 3;
// for (let i = 0; i < arr.length; i += k) {
//   if (i + k <= arr.length) {
//     arr2.push(arr.slice(i, i + k));
//   } else {
//     arr2.push(arr.slice(i, arr.length));
//   }
// }
// for(let i = 0; i < arr2.length; i++){
//   if(arr2[i].length == k){
//     arr2[i].reverse();
//   }
// }
// console.log(arr2.toString().split(',').map(Number))
