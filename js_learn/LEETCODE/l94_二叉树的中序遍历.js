//递归
var inorderTraversal = function(root) {
  let arr = []

  let recursion = function (node) {
    if(node){
      if(node.left) recursion(node.left)
      arr.push(node.val)
      if(node.right) recursion(node.right)
    }
  }

  recursion(root)
  return arr;
};


//使用栈结构
var inorderTraversal = function(root) {
  var result = []
  var stack = []
  while(stack.length!==0||root){
      while(root){
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      result.push(root.val)
      root = root.right;
    }
    return result;
};