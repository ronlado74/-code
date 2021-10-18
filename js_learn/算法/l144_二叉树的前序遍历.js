var preorderTraversal = function(root) {
    let arr = []
    if(root === null){
      return arr
    }

    const recursion = function(node){
      arr.push(node.val)
      if(node.left) recursion(node.left)
      if(node.right) recursion(node.right)
    }

    recursion(root)
    return arr
};