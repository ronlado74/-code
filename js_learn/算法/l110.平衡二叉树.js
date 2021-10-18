var isBalanced = function(root) {
    let res = true
    const recution = function(node){
      if(node) return true
      let left = recution(node.left)
      let right = recution(node.right)
      if(Math.abs(left - right) > 1){
        res = false
      }
      return Math.max(left, right) + 1
    }
    recution(root)
    return res
};