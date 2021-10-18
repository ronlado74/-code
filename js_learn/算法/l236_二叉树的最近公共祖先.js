var lowestCommonAncestor = function(root, p, q) {
  //使用后序遍历
  if (root === null || root === p || root === q) {
      return root;
  }
  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  if (left != null && right != null) return root;
  if (left === null && right !== null){
    return right
  }else if ( right === null && left !== null){
    return left
  }else if( right === null && left === null){
    return null;
  }
}


//给节点添加父节点 以及标记深度
var lowestCommonAncestor = function(root, p, q) {
  const recusion = function(node, father, deep){
    if(node){
    node.father = father
    node.deep = deep
    recusion(node.left, node, deep + 1)
    recusion(node.right, node, deep + 1)
    }else return;
  }
  recusion(root, null, 0)
  while(p.deep > q.deep){
    p = p.father
  }
  while(q.deep > p.deep){
    q = q.father
  }
  while(q != p){
    q = q.father
    p = p.father
  }
  return p
};
