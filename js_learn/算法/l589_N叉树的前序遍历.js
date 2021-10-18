var preorder = function(root) {
    let arr = []
    if(root === null){
      return arr
    }

    const recursion = function(node){
      arr.push(node.val)
      if(node.children){
        node.children.forEach(item => {
          recursion(item)
        });
      }
    }
    recursion(root)
    return arr
};