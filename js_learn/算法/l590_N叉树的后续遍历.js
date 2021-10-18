var postorder = function(root) {
  let arr = []
  if(root === null){
    return arr
  }

  const recursion = function(node){
    if(node.children){
      node.children.forEach(item => {
        recursion(item)
      });
    }
    arr.push(node.val)
  }
  recursion(root)
  return arr
};